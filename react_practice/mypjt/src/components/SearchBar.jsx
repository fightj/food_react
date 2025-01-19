import React from "react";

function SearchBar() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <form className="d-flex" role="search" style={styles.form}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={styles.input} // 추가된 스타일
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  form: {
    maxWidth: "600px", // 부모 폼의 최대 너비
    width: "100%",
  },
  input: {
    width: "400px", // 검색창의 고정 너비
    maxWidth: "100%", // 반응형을 위해 최대 100%로 설정
  },
};

export default SearchBar;
