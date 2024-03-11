import styled from "styled-components";

export const StyleProductsThirdStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  width: 1000px;
  padding: 3rem 4rem;
  min-height: 70vh;
`;

export const StepImage = styled.img`
  width: 70%;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid lightgrey;
  padding-top: 20px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;
  padding: 18px 0;
`;

export const LeftSubsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 16px;
  min-width: ${(props) => (props.minWidth ? props.minWidth : "220px")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "220px")};
`;

export const LeftSubsectionTitle = styled.span`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

export const LeftSubsectionDescription = styled.span`
  color: gray;
  font-size: 13px;
`;

export const Input = styled.input`
  height: 20px;
  padding: 8px 10px;
  border-radius: 6px;
  outline: none;
  width: ${(props) => props.width};
  border: 1px solid lightgrey;
  background-color: #f1efef;
`;

export const DescriptionInput = styled.textarea`
  resize: none;
  border: 1px solid lightgrey;
  border-radius: 6px;
  outline: none;
  width: 40%;
  padding: 12px 14px;
  background-color: #f1efef;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
