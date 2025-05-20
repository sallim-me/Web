import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 60px;
`;

export const Header = styled.header`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  z-index: 100;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px;
  background-color: #fff;
`;

export const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #bddde4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  margin-right: 16px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
`;

export const UserEmail = styled.span`
  font-size: 14px;
  color: #666;
`;

export const MenuList = styled.div`
  margin-top: 8px;
  background-color: #fff;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  span {
    font-size: 16px;
    color: #1a1a1a;
  }

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const ArrowIcon = styled.span`
  font-size: 20px;
  color: #999;
`;

export const UserNickname = styled.div`
  font-size: 15px;
  color: #666;
`;

export const SectionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0 8px 0;
  padding-left: 5%;
`;

export const SectionTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #333;
`;

export const SectionMore = styled.button`
  background: none;
  border: none;
  color: #9fb3df;
  font-size: 22px;
  cursor: pointer;
  padding: 0 8px;
`;

export const HorizontalScroll = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding: 0 16px 8px 16px;
`;

export const PostCard = styled.div`
  display: inline-block;
  width: 140px;
  height: 140px;
  background: #f5f5f5;
  border-radius: 12px;
  margin-right: 12px;
  vertical-align: top;
  box-shadow: 0 1px 4px rgba(189, 221, 228, 0.12);

  &:first-child {
    margin-left: 4px;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 70px;
  background: #bddde4;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const CardTitle = styled.div`
  font-size: 15px;
  color: #333;
  margin: 0 8px 4px 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardPrice = styled.div`
  font-size: 14px;
  color: #9fb3df;
  margin: 0 8px;
  font-weight: 600;
`;
