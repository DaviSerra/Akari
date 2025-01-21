import { MainSectionWrapper, LeftContent, CenterContent, RightContent, VerticalLine, ButtonContainer, LeftButton, RightButton } from "./styles";
import woman from "../../assets/woman.png"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import umbrellla from "../../assets/umbrella-phrase.png";

const MainSection: React.FC = () => {
    return (
        <MainSectionWrapper>

            <LeftContent>
                <div className="japanese-title">静かな美</div>
                <div className="english-title">
                    Minima<br />-list
                </div>
            </LeftContent>

            <CenterContent>
                <img
                    className="main-image"
                    src={woman}
                    alt="Main Visual"
                />
            </CenterContent>
            <VerticalLine />

            <RightContent>
                <img
                    className="umbrella-phrase"
                    src={umbrellla}
                    alt="Main Visual"
                />
                <div className="japanese-title-2">雅の光</div>
            </RightContent>

            <ButtonContainer>
                <LeftButton>
                    <ArrowLeft size={24} weight="bold" />
                </LeftButton>
                <RightButton>
                    <ArrowRight size={24} weight="bold" />
                </RightButton>
            </ButtonContainer>

        </MainSectionWrapper>
    );
};

export default MainSection;