import Divider from "@mui/material/Divider";

import {
  StyledHotelDashboardProfile,
  Section,
  LeftSubsection,
  LeftSubsectionTitle,
  LeftSubsectionDescription,
  Input,
  RightSubsection,
  UserIcon,
  Delete,
  Update,
  MultipleRightSubsection,
  MultipleRow,
  MultipleBox,
  MultipleBoxTitle,
} from "./styles.ts";

const UserDashboardProfile = () => {
  return (
    <StyledHotelDashboardProfile>
      <Section>
        <LeftSubsection>
          <LeftSubsectionTitle>Foto</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Será exibida no seu perfil
          </LeftSubsectionDescription>
        </LeftSubsection>
        <RightSubsection>
          <UserIcon src="../images/user-profile.png" alt="" />
          <Delete>Deletar</Delete>
          <Update>Atualizar</Update>
        </RightSubsection>
      </Section>

      <Divider />

      <Section>
        <LeftSubsection>
          <LeftSubsectionTitle>Endereço</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Será exibido no seu perfil
          </LeftSubsectionDescription>
        </LeftSubsection>
        <MultipleRightSubsection>
          <MultipleRow>
            <MultipleBox width="60%">
              <MultipleBoxTitle>Endereço</MultipleBoxTitle>
              <Input type="text" placeholder="Endereço" />
            </MultipleBox>
            <MultipleBox width="35%">
              <MultipleBoxTitle>Número</MultipleBoxTitle>
              <Input type="text" placeholder="Número" />
            </MultipleBox>
          </MultipleRow>
          <MultipleRow>
            <MultipleBox width="40%">
              <MultipleBoxTitle>CEP</MultipleBoxTitle>
              <Input type="text" placeholder="00000-00" />
            </MultipleBox>
            <MultipleBox width="55%">
              <MultipleBoxTitle>Estado</MultipleBoxTitle>
              <Input type="text" placeholder="Estado" />
            </MultipleBox>
          </MultipleRow>
          <MultipleRow>
            <MultipleBox width="100%">
              <MultipleBoxTitle>Complemento</MultipleBoxTitle>
              <Input type="text" placeholder="Complemento" />
            </MultipleBox>
          </MultipleRow>
        </MultipleRightSubsection>
      </Section>

      <Divider />

      <Section>
        <LeftSubsection>
          <LeftSubsectionTitle>Contato</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Apenas os locais que você se hospedar poderão ver
          </LeftSubsectionDescription>
        </LeftSubsection>
        <MultipleRightSubsection>
          <MultipleRow>
            <MultipleBox width="48%">
              <MultipleBoxTitle>Telefone</MultipleBoxTitle>
              <Input type="text" placeholder="(85) 9-1234-5678" />
            </MultipleBox>
            <MultipleBox width="48%">
              <MultipleBoxTitle>E-mail</MultipleBoxTitle>
              <Input type="text" placeholder="E-mail" />
            </MultipleBox>
          </MultipleRow>
        </MultipleRightSubsection>
      </Section>
    </StyledHotelDashboardProfile>
  );
};

export default UserDashboardProfile;
