import styled from "styled-components";

export const HeaderCss = {
  Header: styled.div`
    position: fixed;
    left: 50%;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    margin: 0 auto;
    color: white;
    transform: translate(-50%);
  `,
  Logo: styled.div`
    @font-face {
      font-family: Jalnan;
      src: url("../fonts/Jalnan.eot");
      src: url("../fonts/Jalnan.woff") format("woff");
    }
    font-size: 28px;
    font-family: "Jalnan", sans-serif;
    text-transform: uppercase;
  `,
  MainMenu: styled.div`
    display: flex;
    div {
      margin-left: 100px;
    }
  `,

  //  백그라운드 제일 위에만 있게 하려면
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
  `,
  IntroVideo: styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;

    p {
      position: absolute;
      left: 50%;
      bottom: 13%;
      color: #e9ee00;
      font-size: 20px;
      font-weight: 600;
      font-family: "Jalnan", sans-serif;
      transform: translate(-50%);
    }
    .down {
      position: absolute;
      left: 50%;
      bottom: 5%;
      width: 50px;
      height: 50px;
      transform: translate(-50%);
      animation: scrolldown 1300ms linear infinite;

      @keyframes scrolldown {
        0% {
          bottom: 9%;
          opacity: 1;
        }
        50% {
          bottom: 7%;
          opacity: 0.5;
        }
        100% {
          bottom: 5%;
          opacity: 0;
        }
      }
    }
  `,
  // 이건 백그라운드를 전체 하는거
  // Wrapper : styled.div`
  //     width: 100%;
  //     height: 100vh;
  //     position: relative;
  //     overflow: hidden;
  // `,
  // IntroVideo : styled.div`
  //     width: 100%;
  //     height: 100%;
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     z-index: -1;
  //     p{
  //         position: absolute; left: 50%; bottom: 15%;
  //         color: rgba(255, 255, 255, 0.5); font-size: 18px; font-weight: 600;
  //         font-family: 'Jalnan', sans-serif;
  //         transform: translate(-50%);
  //     }
  //     .down {
  //         position: absolute; left: 50%; bottom: 5%;
  //         width: 50px; height: 50px; color: white;
  //         transform: translate(-50%);
  //         animation: scrolldown 1300ms linear infinite;

  //         @keyframes scrolldown {
  //         0% {
  //             bottom: 9%;
  //             opacity: 1;
  //         }
  //         50% {
  //             bottom: 7%;
  //             opacity: 0.5;
  //         }
  //         100% {
  //             bottom: 5%;
  //             opacity: 0;
  //         }
  //     }
  //     }

  // 이건 버리기
  /* VideoWrapper: styled.div`
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    `, */

  Video: styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  Titlenm: styled.div`
    position: absolute;
    left: 20%;
    top: 30%;
    font-size: 100px;
    color: white;
    font-family: Staatliches;

    @font-face {
      font-family: Staatliches;
      src: url("../fonts/Staatliches.eot");
      src: url("../fonts/Staatliches.woff") format("woff");
    }
  `,
  Back1: styled.div`
    .imgBox {
      background: url("../images/bg1.jpg") no-repeat center center;
      background-size: cover;
      background-attachment: fixed;
    }
  `,
};
