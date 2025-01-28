import { Background, MainWrapper } from "./styled.js";
import { Header } from "./Header";
import  SearchInput from "./Search";

export const Navigation = () => {
  return (
    <Background>
      <MainWrapper>
        <Header />
        <SearchInput />
      </MainWrapper>
    </Background>
  );
};
export default Navigation;