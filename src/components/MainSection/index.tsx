import { MainSectionWrapper, LeftContent, CenterContent, RightContent, VerticalLine } from "./styles";
import woman from "../../assets/woman.png"

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
                <div className="vertical-text">
                    傘の下世界は静かになる<br />
                    空と海の奏で
                </div>
            </RightContent>
        </MainSectionWrapper>
    );
};

export default MainSection;