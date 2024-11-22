import { VStack, Image, Text, Heading, View, ScrollView } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} bg="$gray700">
                <Image 
                    w="$full"
                    h={624}
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"
                    position="absolute"
                />

                <VStack flex={1} px={"$10"} pb={"$16"}>
                    <View alignItems="center" py="$24">
                        <Logo />

                        <Text color="$gray100" fontSize="$sm">
                            Treine sua mente e o seu corpo
                        </Text>
                    </View>

                    <View alignItems="center" gap="$2">
                        <Heading color="$gray100">Acesse a conta</Heading>

                        <Input 
                            placeholder="E-mail" 
                            keyboardType="email-address" 
                            autoCapitalize="none"
                        />

                        <Input placeholder="Senha" secureTextEntry />

                        <Button title="Acessar" />
                    </View>

                    <View flex={1} justifyContent="flex-end" mt={"$4"} alignItems="center">
                        <Text
                            mb={"$3"}
                            fontSize={"$sm"}
                            fontFamily="$body"
                            color="$gray100"
                        >
                            Ainda não tem acesso?
                        </Text>

                        <Button title="Criar conta" variant="outline" />
                    </View>
                </VStack>
            </VStack>
        </ScrollView>
    )
}