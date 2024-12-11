import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  max-width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 690px;
  padding-left: 25px;
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Percentage = styled.div<{ textColor: string }>`
  padding-left: 25px;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  gap: 5px;
  color: ${(props) => props.textColor};
  font-weight: bold;
`;

export const Text = styled.p`
  color: rgb(129, 125, 125);
  font-weight: 450;
`;

export const Calendar = styled.div`
  padding-left: 25px;
  font-size: 1rem;
  color: rgb(129, 125, 125);
  margin-bottom: 20px;
`;

export const DashboardButton = styled.button`
  color: #12c2d9;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 5px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  padding: 6px 16px;
  font-weight: bold;
  height: 35px;
  width: 110px;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
    text-decoration: none;
    transition-duration: 0.1s;
  }
`;

export const Indices = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 30px;
`;

export const Dot = styled.span<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  display: inline-block;
  background-color: ${(props) => props.color};
`;
