import Head from "next/head";

// UI
import Container from "components/UI/Container";

// Componentes
import LoginCard from "components/pages/login/LoginCard";

function Login() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Banco Digital" key="title" />
        <meta
          name="description"
          content="Painel desenvolvido com React, Next e Typescript. Hospedado na Vercel."
        />
        <title>Banco Digital | Painel</title>
      </Head>
      <Container>
        <LoginCard />
      </Container>
    </>
  );
}

export default Login;
