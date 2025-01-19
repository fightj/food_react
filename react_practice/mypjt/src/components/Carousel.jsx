import React from "react";

function HomeCarousel() {
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {/* 첫 번째 슬라이드 */}
        <div
          className="carousel-item active"
          style={{
            backgroundImage: "url('../src/assets/images/main_image1.jpeg')", // 첫 번째 이미지 경로
            backgroundSize: "contain", // 이미지 크기 조정
            backgroundPosition: "center", // 이미지 위치 설정
            height: "50vh", // 높이 설정
          }}
        >
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p className="opacity-75">
                Some representative placeholder content for the first slide of the carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* 두 번째 슬라이드 */}
        <div
          className="carousel-item"
          style={{
            backgroundImage: "url('path/to/your/image2.jpg')", // 두 번째 이미지 경로
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "50vh",
          }}
        >
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* 세 번째 슬라이드 */}
        <div
          className="carousel-item"
          style={{
            backgroundImage: "url('path/to/your/image3.jpg')", // 세 번째 이미지 경로
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: "50vh",
          }}
        >
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#myCarousel"
  data-bs-slide="prev"
  style={{
    backgroundColor: "transparent", // 배경을 투명하게 설정
    border: "none", // 테두리 제거
    position: "absolute", // 절대 위치로 배치
    top: "50%", // 버튼을 슬라이드 가운데로 배치
    left: "10px", // 왼쪽 여백을 추가하여 버튼을 왼쪽에 배치
    zIndex: 2, // 버튼을 이미지 위로 배치
    transform: "translateY(-50%)", // 버튼이 정확히 가운데 오도록 조정
  }}
>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>

<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#myCarousel"
  data-bs-slide="next"
  style={{
    backgroundColor: "transparent", // 배경을 투명하게 설정
    border: "none", // 테두리 제거
    position: "absolute", // 절대 위치로 배치
    top: "50%", // 버튼을 슬라이드 가운데로 배치
    right: "10px", // 오른쪽 여백을 추가하여 버튼을 오른쪽에 배치
    zIndex: 2, // 버튼을 이미지 위로 배치
    transform: "translateY(-50%)", // 버튼이 정확히 가운데 오도록 조정
  }}
>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>

    </div>
  );
}

export default HomeCarousel;
