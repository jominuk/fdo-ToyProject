import React, {useState, useEffect} from "react";
import { HeaderCss } from "../styles/HeaderCss";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <>
            <HeaderCss.Header style={{background: scrolling ? "rgba(20, 20, 20, 0.8)" : "transparent"}}>
                <HeaderCss.Logo>fdo</HeaderCss.Logo>

                <HeaderCss.MainMenu>
                <div className="menu" onClick={() => navigate("community")}>메뉴 1</div>
                    <div>메뉴 2</div>
                    <div>메뉴 2</div>
                    <div>메뉴 2</div>
                    <div>로그인</div>
                    <div>회원가입</div>
                </HeaderCss.MainMenu>

            </HeaderCss.Header>

            <HeaderCss.Wrapper>
                <HeaderCss.IntroVideo>
                    <HeaderCss.VideoWrapper>
                        <HeaderCss.Video muted autoPlay loop>
                            <source src="/video/main.mp4" type="video/mp4" />
                        </HeaderCss.Video>
                        <HeaderCss.titlenm>FDO</HeaderCss.titlenm>
                        <p>scroll down</p>
                        <img
                            src={require("../images/down.png")}
                            alt="화살표"
                            className="down"
                        />
                    </HeaderCss.VideoWrapper>
                </HeaderCss.IntroVideo>
            </HeaderCss.Wrapper>

{/* 백그라운드 제일 위에만 있게 하려면  */}
            {/* <HeaderCss.Wrapper>
                <HeaderCss.IntroVideo>
                    
                        <HeaderCss.Video muted autoPlay loop>
                            <source src="/video/main.mp4" type="video/mp4" />
                        </HeaderCss.Video>
                        <HeaderCss.titlenm>FDO</HeaderCss.titlenm>
                        <p>scroll down</p>
                        <img
                            src={require("../images/down.png")}
                            alt="화살표"
                            className="down"
                        />
                    
                </HeaderCss.IntroVideo>
            </HeaderCss.Wrapper> */}

 
       

            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
            <div>wjdnklsjd wqjndkljasnd qwdjnskldj</div>
        
        </>
    
    );
};

export default MainPage;

