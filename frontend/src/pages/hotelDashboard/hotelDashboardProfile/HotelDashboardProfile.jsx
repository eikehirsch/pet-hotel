import Divider from "@mui/material/Divider";

import ToggleButtons from "./toggleButton/ToggleButton.jsx";
import ScheduleButton from "./selectButton/SelectButton.jsx";
import Button from "../../../components/button/Button.jsx";

import {
  StyleHotelDashboardProfile,
  MainSection,
  MainTitle,
  MainDescription,
  Section,
  LeftSubsection,
  LeftSubsectionTitle,
  LeftSubsectionDescription,
  Input,
  RightSubsection,
  UserIcon,
  Delete,
  Update,
  Cover,
  DescriptionInput,
  MultipleRightSubsection,
  MultipleRow,
  MultipleBox,
  MultipleBoxTitle,
  ScheduleColumn,
  ScheduleBox,
  ScheduleTitle,
  ValueInput,
  DiscountTitle,
} from "./styles.ts";

const HotelDashboardProfile = () => {
  return (
    <StyleHotelDashboardProfile>
      <MainSection>
        <MainTitle>Meu perfil</MainTitle>
        <MainDescription>
          Atualize sua foto e detalhes pessoais aqui
        </MainDescription>
        <Divider />
      </MainSection>

      <Section>
        <LeftSubsection>
          <LeftSubsectionTitle>Nome do pet hotel</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Será exibido no seu perfil
          </LeftSubsectionDescription>
        </LeftSubsection>
        <Input width="100%" type="text" placeholder="Nome" />
      </Section>
      <Divider />

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
          <LeftSubsectionTitle>Capa</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Será exibida no seu perfil
          </LeftSubsectionDescription>
        </LeftSubsection>
        <RightSubsection>
          <input type="file" />
          <Cover />
          <Delete>Deletar</Delete>
          <Update>Atualizar</Update>
        </RightSubsection>
      </Section>

      <Divider />

      <Section>
        <LeftSubsection>
          <LeftSubsectionTitle>Descrição</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Escreva o que você quer que os clientes saibam
          </LeftSubsectionDescription>
        </LeftSubsection>
        <RightSubsection>
          <DescriptionInput cols="30" rows="10" />
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
          <LeftSubsectionTitle>Redes sociais</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Será exibido no seu perfil
          </LeftSubsectionDescription>
        </LeftSubsection>
        <MultipleRightSubsection>
          <MultipleRow>
            <MultipleBox width="48%">
              <MultipleBoxTitle>Cole o link</MultipleBoxTitle>
              <Input type="text" placeholder="Endereço" />
            </MultipleBox>
            <MultipleBox width="48%">
              <MultipleBoxTitle>Cole o link</MultipleBoxTitle>
              <Input type="text" placeholder="Número" />
            </MultipleBox>
          </MultipleRow>
        </MultipleRightSubsection>
      </Section>

      <Section>
        <LeftSubsection>
          <LeftSubsectionTitle>Animais aceitos</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Escreva quais pets serão aceitos em seu hotel
          </LeftSubsectionDescription>
        </LeftSubsection>
        <RightSubsection>
          <DescriptionInput cols="30" rows="10" />
        </RightSubsection>
      </Section>

      <Divider />

      <Divider />

      <Section>
        <LeftSubsection>
          <LeftSubsectionTitle>Tipo de Pet Hotel</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Selecione a opção que mais se alinha com a essência do seu
            estabelecimento
          </LeftSubsectionDescription>
        </LeftSubsection>
        <RightSubsection>
          <ToggleButtons />
        </RightSubsection>
      </Section>

      <Divider />

      <Section>
        <LeftSubsection>
          <LeftSubsectionTitle>Galeria</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Adicione imagens do seu espaço
          </LeftSubsectionDescription>
        </LeftSubsection>
        <RightSubsection flexDirection="column" alignItems="flex-start">
          <input type="file" />
          <span>Até 6 imagens</span>
        </RightSubsection>
      </Section>

      <Divider />

      <Section>
        <LeftSubsection minWidth="120px">
          <LeftSubsectionTitle>Check-in</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Selecione horário
          </LeftSubsectionDescription>
        </LeftSubsection>
        <ScheduleColumn>
          <ScheduleBox>
            <ScheduleTitle>Domingo</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Segunda-Feira</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Terça-Feira</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Quarta-Feira</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Quinta-Feira</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Sexta-Feira</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Sábado</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
        </ScheduleColumn>
        <LeftSubsection minWidth="120px">
          <LeftSubsectionTitle>Check-in</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Selecione horário
          </LeftSubsectionDescription>
        </LeftSubsection>
        <ScheduleColumn>
          <ScheduleBox>
            <ScheduleTitle>Domingo</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Segunda-Feira</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Terça-Feira</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Quarta-Feira</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Quinta-Feira</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Sexta-Feira</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Sábado</ScheduleTitle>
            <ScheduleButton />
          </ScheduleBox>
        </ScheduleColumn>
      </Section>

      <Divider />

      <Section>
        <LeftSubsection>
          <LeftSubsectionTitle>Valores da Hospedagem</LeftSubsectionTitle>
          <LeftSubsectionDescription>
            Insira os valores
          </LeftSubsectionDescription>
        </LeftSubsection>
        <ScheduleColumn>
          <DiscountTitle>Desconto</DiscountTitle>
          <ScheduleBox>
            <ScheduleTitle>Domingo</ScheduleTitle>
            <ValueInput type="number" /> -
            <ValueInput type="number" /> %
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Segunda-Feira</ScheduleTitle>
            <ValueInput type="number" /> -
            <ValueInput type="number" /> %
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Terça-Feira</ScheduleTitle>
            <ValueInput type="number" /> -
            <ValueInput type="number" /> %
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Quarta-Feira</ScheduleTitle>
            <ValueInput type="number" /> -
            <ValueInput type="number" /> %
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Quinta-Feira</ScheduleTitle>
            <ValueInput type="number" /> -
            <ValueInput type="number" /> %
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Sexta-Feira</ScheduleTitle>
            <ValueInput type="number" /> -
            <ValueInput type="number" /> %
          </ScheduleBox>
          <ScheduleBox>
            <ScheduleTitle>Sábado</ScheduleTitle>
            <ValueInput type="number" /> -
            <ValueInput type="number" /> %
          </ScheduleBox>
        </ScheduleColumn>
      </Section>

      <Divider />

      <Button
        color="white"
        backgroundColor="#0a846b"
        borderRadius="8px"
        fontWeight="500"
        border="1px solid #0a846b"
        width="50%"
        margin="30px auto 0 auto"
      >
        Atualizar
      </Button>
    </StyleHotelDashboardProfile>
  );
};

export default HotelDashboardProfile;
