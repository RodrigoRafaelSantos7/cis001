import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type FormSubmissionEmailProps = {
  name: string;
  email: string;
  message: string;
};

export const FormSubmissionEmail = ({
  name,
  email,
  message,
}: FormSubmissionEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Log in with this magic link.</Preview>
      <Container style={container}>
        <Img
          alt="Coral Infantil de Setúbal"
          height={75}
          src={"https://cdn.coralinfantilsetubal.com/assets/cis-icon.png"}
          width={100}
        />
        <Heading style={heading}>
          🎼 Submeteram um novo pedido de contacto
        </Heading>
        <Section style={body}>
          <Text style={paragraph}>Nome: {name}</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>Mensagem: {message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Coral Infantil de Setúbal</Text>
        <Text style={footer}>Rua Álvaro Perdigão, Nº 4 A 2900-163 Setúbal</Text>
      </Container>
    </Body>
  </Html>
);

FormSubmissionEmail.PreviewProps = {
  name: "John Doe",
  email: "john.doe@example.com",
  message: "Hello, world!",
} as FormSubmissionEmailProps;

export default FormSubmissionEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/static/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};
