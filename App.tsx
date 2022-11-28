import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  gql,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";
import { GET_ORDERS } from "./graphql/queries";
import RootNavigator from "./navigator/RootNavigator";
import utilities from "./tailwind.json";

const link = createHttpLink({
  uri: "http://192.168.0.6:5001/api/jazzy-rottweiler",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default function App() {
  return (
    //@ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
