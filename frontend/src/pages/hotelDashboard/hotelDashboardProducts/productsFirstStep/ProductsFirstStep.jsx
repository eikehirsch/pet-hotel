import {
  StyleProductsFirstStep,
  StepImage,
  Container,
  Section,
  LeftSubsection,
  LeftSubsectionTitle,
  LeftSubsectionDescription,
  Input,
  Select,
  InputColorBox,
  ColorCircle,
} from "./styles.ts";

import Button from "../../../../components/button/Button.jsx";

const ProductsFirstStep = ({ updateStep }) => {
  return (
    <StyleProductsFirstStep>
      <StepImage src="../images/dashboard-product-step1.png" />
      <Container>
        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Imagens do produto</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Deixe seus produtos atraentes
            </LeftSubsectionDescription>
          </LeftSubsection>
          <input type="file" />
        </Section>

        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Nome do produto</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Escreva um título do seu produto que seu cliente buscaria
            </LeftSubsectionDescription>
          </LeftSubsection>
          <Input width="50%" />
        </Section>

        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Categoria</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Escolha a categoria
            </LeftSubsectionDescription>
          </LeftSubsection>
          <Select>
            <option disabled value="">
              Selecionar
            </option>
            <option value="">asdasdasd</option>
            <option value="">asdasdasd</option>
            <option value="">asdasdasd</option>
            <option value="">asdasdasd</option>
          </Select>
        </Section>

        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Variação de cores</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Escreva um título do seu produto que seu cliente buscaria
            </LeftSubsectionDescription>
          </LeftSubsection>
          <InputColorBox>
            <input type="color" />
            <button>Confirmar</button>
          </InputColorBox>
          <div>
            <span>Cores escolhidas</span>
            <ColorCircle />
          </div>
        </Section>

        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Gênero</LeftSubsectionTitle>
          </LeftSubsection>
          <Select>
            <option disabled value="">
              Selecionar
            </option>
            <option value="">Masculino</option>
            <option value="">Feminino</option>
            <option value="">Unissex</option>
          </Select>
        </Section>

        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Porte</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Selecione os portes disponíveis para o seu produto
            </LeftSubsectionDescription>
          </LeftSubsection>
          <Select>
            <option disabled value="">
              Selecionar
            </option>
            <option value="">Pequeno</option>
            <option value="">Médio</option>
            <option value="">Grande</option>
            <option value="">GG</option>
          </Select>
        </Section>

        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Marca</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Marca do produto
            </LeftSubsectionDescription>
          </LeftSubsection>
          <Input width="28%" />
        </Section>

        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Fabricante</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Fabricante do produto
            </LeftSubsectionDescription>
          </LeftSubsection>
          <Input width="28%" />
        </Section>

        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Dimensões</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Forneça informações detalhadas sobre as medidas do seu produto
            </LeftSubsectionDescription>
          </LeftSubsection>
          <Input placeholder="Altura" width="25%" />
          <Input placeholder="Largura" width="25%" />
          <Input placeholder="Comprimento" width="25%" />
          <Input placeholder="cm" width="20%" />
        </Section>

        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Estoque</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Quantidade de produtos disponíveis em seu estoque
            </LeftSubsectionDescription>
          </LeftSubsection>
          <Input width="28%" />
        </Section>
      </Container>

      <Button
        onClick={() => updateStep(2)}
        color="#ffffff"
        backgroundColor="#0a846b"
        borderRadius="8px"
        fontWeight="500"
      >
        Próximo
        <img src="../images/arrow-right.svg" alt="" />
      </Button>
    </StyleProductsFirstStep>
  );
};

export default ProductsFirstStep;
