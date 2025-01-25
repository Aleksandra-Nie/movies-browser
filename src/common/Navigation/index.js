import { Background, Wrapper} from "./styled.js";
import { Header } from "./Header";
import  SearchInput from "./Search";

export const Navigation = () => {
  return (
    <Background>
      <Wrapper>
        <Header />
        <SearchInput />
      </Wrapper>
    </Background>
  );
};
export default Navigation;