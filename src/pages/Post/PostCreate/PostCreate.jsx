import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../../../assets/back.svg";
import {
  Container,
  Form,
  Section,
  Label,
  Input,
  Select,
  TextArea,
  ImageUploadButton,
  QuestionBox,
  Question,
  RadioGroup,
  SubmitButton,
  Divider,
} from "./styled";
import refrigeratorIcon from "../../../assets/refrigerator.svg";
import washerIcon from "../../../assets/washer.svg";
import airconditionerIcon from "../../../assets/airconditioner.svg";

const PostCreate = ({
  isEditMode = false,
  initialData = null,
  postId = null,
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    tradeType: "",
    category: "",
    images: [],
    modelName: "",
    specifications: "",
    defectAnswers: {},
    description: "",
    price: "",
    buyingInfo: { quantity: "", desiredPrice: "", condition: "" },
  });

  useEffect(() => {
    if (initialData) {
      const cleanTitle = initialData.title.replace(
        /^\[(판매|판매완료|구매|구매완료)\] /,
        ""
      );

      // 이미지를 { url: string, file: File | null } 형태로 변환하여 상태에 설정
      const initialImages = Array.isArray(initialData.images)
        ? initialData.images.map((img) => ({ url: img.url || img, file: null })) // 기존 이미지는 file: null
        : initialData.imageUrl
        ? [{ url: initialData.imageUrl, file: null }]
        : []; // imageUrl만 있는 경우 처리

      setFormData({
        ...formData,
        ...initialData,
        title: cleanTitle,
        images: initialImages,
        defectAnswers: initialData.defectAnswers || {},
        buyingInfo: initialData.buyingInfo || {
          quantity: "",
          desiredPrice: "",
          condition: "",
        },
      });
    }
  }, [initialData]);

  const categories = ["냉장고", "세탁기", "에어컨"];
  const tradeTypes = ["판매", "구매"];

  const defectQuestions = {
    냉장고: [
      "냉각 기능에 문제가 있나요?",
      "문이 제대로 닫히나요?",
      "내부 부품이 모두 있나요?",
    ],
    세탁기: [
      "세탁 기능에 문제가 있나요?",
      "배수가 잘 되나요?",
      "소음이 심한가요?",
    ],
    에어컨: [
      "냉방 기능에 문제가 있나요?",
      "실외기 상태는 어떤가요?",
      "필터 상태는 어떤가요?",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDefectQuestionChange = (question, answer) => {
    setFormData((prev) => ({
      ...prev,
      defectAnswers: {
        ...prev.defectAnswers,
        [question]: answer,
      },
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.images.length > 5) {
      alert("최대 5장까지 업로드할 수 있습니다.");
      return;
    }

    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file: file,
    }));

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));

    // 파일 인풋 초기화 (같은 파일 다시 선택 가능하게)
    e.target.value = "";
  };

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0);

      // 스트림 정지
      stream.getTracks().forEach((track) => track.stop());

      // 캔버스를 Blob으로 변환
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `camera_${Date.now()}.jpg`, {
            type: "image/jpeg",
          });
          const newImage = {
            url: URL.createObjectURL(blob),
            file: file,
          };

          // 이미지 개수 제한 체크
          if (formData.images.length >= 5) {
            alert("최대 5장까지 업로드할 수 있습니다.");
            return;
          }

          setFormData((prev) => ({
            ...prev,
            images: [...prev.images, newImage],
          }));
        }
      }, "image/jpeg");
    } catch (error) {
      console.error("카메라 접근 오류:", error);
      alert("카메라에 접근할 수 없습니다.");
    }
  };

  const handleImageDelete = (index) => {
    // 삭제 시 URL 해제 (메모리 누수 방지)
    URL.revokeObjectURL(formData.images[index].url);
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const getImageForCategory = (category) => {
    switch (category) {
      case "냉장고":
        return refrigeratorIcon;
      case "세탁기":
        return washerIcon;
      case "에어컨":
        return airconditionerIcon;
      default:
        return refrigeratorIcon;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedPosts = localStorage.getItem("posts");
    const posts = savedPosts ? JSON.parse(savedPosts) : [];

    // 저장 시 file 객체는 제외하고 url만 저장
    const imagesToSave = formData.images.map((img) => img.url);

    if (isEditMode && postId) {
      // 수정 모드: 해당 글만 업데이트
      const updatedPosts = posts.map((p) =>
        p.id === Number(postId)
          ? {
              ...p,
              title: `[${formData.tradeType}] ${formData.title}`,
              modelName: formData.modelName,
              price: Number(formData.price),
              images: imagesToSave,
              imageUrl:
                imagesToSave.length > 0
                  ? imagesToSave[0]
                  : getImageForCategory(formData.category),
              category: formData.category,
              specifications: formData.specifications,
              defectAnswers: formData.defectAnswers,
              description: formData.description,
              buyingInfo: formData.buyingInfo,
            }
          : p
      );
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      navigate(`/post/detail/${postId}`);
    } else {
      // 생성 모드
      const newPost = {
        id: Date.now(),
        title: `[${formData.tradeType}] ${formData.title}`,
        modelName: formData.modelName,
        price: Number(formData.price),
        images: imagesToSave,
        imageUrl:
          imagesToSave.length > 0
            ? imagesToSave[0]
            : getImageForCategory(formData.category),
        isScraped: false,
        category: formData.category,
        status: "available",
        author: "현재 사용자",
        authorId: "current-user",
        isAuthor: true,
        type: formData.tradeType === "판매" ? "sell" : "buy",
        specifications: formData.specifications,
        defectAnswers: formData.defectAnswers,
        description: formData.description,
        createdAt: new Date().toISOString(),
        buyingInfo: formData.buyingInfo,
      };
      const updatedPosts = [newPost, ...posts];
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      navigate("/post/list");
    }
  };

  return (
    <Container>
      <div
        style={{
          height: 56,
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          background: "none",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            padding: 8,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={backIcon}
            alt="뒤로 가기"
            style={{ width: 28, height: 28 }}
          />
        </button>
      </div>
      <Form onSubmit={handleSubmit}>
        <Section>
          <Label>제목</Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="브랜드명, 제품명, 모델명을 포함해주세요"
            required
          />
        </Section>
        <Section>
          <Label>거래 유형</Label>
          {isEditMode ? (
            <div style={{ padding: "8px 12px", fontSize: "16px" }}>
              {formData.tradeType}
            </div>
          ) : (
            <Select
              name="tradeType"
              value={formData.tradeType}
              onChange={handleChange}
              required
            >
              <option value="">선택하세요</option>
              {tradeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          )}
        </Section>

        {formData.tradeType && (
          <>
            <Section>
              <Label>카테고리</Label>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">선택하세요</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </Section>

            {formData.tradeType === "판매" && (
              <>
                <Section>
                  <Label>제품 사진 (최대 5장)</Label>
                  <div
                    style={{ display: "flex", gap: "8px", marginBottom: "8px" }}
                  >
                    <ImageUploadButton>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                      />
                      <span>갤러리에서 선택</span>
                    </ImageUploadButton>
                    <ImageUploadButton onClick={handleCameraCapture}>
                      <span>카메라로 촬영</span>
                    </ImageUploadButton>
                  </div>
                  {formData.images.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginTop: "8px",
                        overflowX: "auto",
                        padding: "8px",
                        scrollbarWidth: "thin",
                        scrollbarColor: "#bddde4 #f5f5f5",
                        "&::-webkit-scrollbar": {
                          height: "6px",
                        },
                        "&::-webkit-scrollbar-track": {
                          background: "#f5f5f5",
                          borderRadius: "3px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "#bddde4",
                          borderRadius: "3px",
                        },
                      }}
                    >
                      {formData.images.map((image, index) => (
                        <div key={index} style={{ position: "relative" }}>
                          <img
                            src={image.url}
                            alt={`Preview ${index + 1}`}
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                              borderRadius: "4px",
                              flexShrink: 0,
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => handleImageDelete(index)}
                            style={{
                              position: "absolute",
                              top: "-8px",
                              right: "-8px",
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              background: "#ff4444",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "12px",
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </Section>

                <Section>
                  <Label>모델명</Label>
                  <Input
                    type="text"
                    name="modelName"
                    value={formData.modelName}
                    onChange={handleChange}
                    placeholder="정확한 모델명을 입력해주세요"
                    required
                    style={{
                      height: "auto",
                      minHeight: "60px",
                      overflowY: "auto",
                    }}
                  />
                </Section>

                <Section>
                  <Label>제품 사양</Label>
                  <TextArea
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleChange}
                    placeholder="제품의 상세 사양을 입력해주세요 (브랜드, 용량, 소비전력, 크기 등)"
                    required
                    style={{ minHeight: "120px" }}
                  />
                </Section>

                {formData.category && (
                  <>
                    {formData.tradeType === "판매" &&
                      defectQuestions[formData.category] && (
                        <Section>
                          <Label>제품 상태</Label>
                          <QuestionBox>
                            {defectQuestions[formData.category].map(
                              (question, index) => (
                                <div
                                  key={index}
                                  style={{
                                    marginBottom:
                                      index !==
                                      defectQuestions[formData.category]
                                        .length -
                                        1
                                        ? "16px"
                                        : "0",
                                  }}
                                >
                                  <Question>{question}</Question>
                                  <RadioGroup>
                                    <label>
                                      <input
                                        type="radio"
                                        name={`defect_${index}`}
                                        value="yes"
                                        onChange={() =>
                                          handleDefectQuestionChange(
                                            question,
                                            "yes"
                                          )
                                        }
                                        checked={
                                          formData.defectAnswers[question] ===
                                          "yes"
                                        }
                                        required={formData.tradeType === "판매"}
                                      />
                                      <span>예</span>
                                    </label>
                                    <label>
                                      <input
                                        type="radio"
                                        name={`defect_${index}`}
                                        value="no"
                                        onChange={() =>
                                          handleDefectQuestionChange(
                                            question,
                                            "no"
                                          )
                                        }
                                        checked={
                                          formData.defectAnswers[question] ===
                                          "no"
                                        }
                                        required={formData.tradeType === "판매"}
                                      />
                                      <span>아니오</span>
                                    </label>
                                  </RadioGroup>
                                </div>
                              )
                            )}
                          </QuestionBox>
                        </Section>
                      )}
                  </>
                )}

                <Section>
                  <Label>상세 설명</Label>
                  <TextArea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="제품의 사용 기간, 상태, 하자 여부 등 상세한 정보를 입력해주세요"
                    required
                  />
                </Section>

                <Section>
                  <Label>가격</Label>
                  <Input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="숫자만 입력"
                    required
                  />
                </Section>
              </>
            )}

            {formData.tradeType === "구매" && (
              <>
                <Section>
                  <Label>구매 정보</Label>
                  <Input
                    type="number"
                    name="buyingInfo.quantity"
                    value={formData.buyingInfo.quantity}
                    onChange={handleChange}
                    placeholder="수량(최소 3개)"
                    required
                  />
                  <Input
                    type="number"
                    name="buyingInfo.desiredPrice"
                    value={formData.buyingInfo.desiredPrice}
                    onChange={handleChange}
                    placeholder="희망 가격"
                    required
                  />
                  {/* <Input
                    type="date"
                    name="buyingInfo.deadline"
                    value={formData.buyingInfo.deadline}
                    onChange={handleChange}
                    placeholder="마감 기한"
                    required
                  /> */}
                  <TextArea
                    name="buyingInfo.condition"
                    value={formData.buyingInfo.condition}
                    onChange={handleChange}
                    placeholder="제품 조건을 입력해주세요"
                    required
                  />
                </Section>
              </>
            )}
          </>
        )}

        <SubmitButton type="submit">등록하기</SubmitButton>
      </Form>
    </Container>
  );
};

export default PostCreate;
