import styled from 'styled-components';
import Link from 'next/link';
import Button from '../src/components/inputs/Button';
import ImageWithSpace from '../src/components/layout/ImageWithSpace';
import { H1 } from './../src/components/typography/H1';
import { H2 } from './../src/components/typography/H2';
import { H4 } from './../src/components/typography/H4';
import Input from './../src/components/inputs/Input';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { signupSchema } from '../modules/user/user.schema';

const FormContainer = styled.div`
  margin-top: 60px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`;

const Text = styled.p`
  text-align: center;
`;

export default function SignupPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signupSchema),
  });

  const handleForm = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Tudo que acontece no mundo dev, está aqui!</H4>

      <Form onSubmit={handleSubmit(handleForm)}>
        <H2>Crie sua conta</H2>
        <Input
          label="Nome"
          name="firstName"
          control={control}
        />
        <Input
          label="Sobrenome"
          name="lastName"
          control={control}
        />
        <Input
          label="Usuário"
          name="user"
          control={control}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          control={control}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          control={control}
        />
        <Button
          type="submit"
          disable={Object.keys(errors).length > 0}
        >
          Entrar
        </Button>
      </Form>
      <Text>
        Já possui uma conta?
        <Link href="/login"> Faça seu login</Link>
      </Text>

      <FormContainer></FormContainer>
    </ImageWithSpace>
  );
}
