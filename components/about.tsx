export default function About() {
  return (
    <section
      className="w-11/12 mx-auto text-center pb-16 scroll-mt-36"
      id="about"
    >
      <div className="relative mb-10">
        <div className="mx-auto bg-slate-200 dark:bg-cyan-950 blur-lg w-44 h-16 rounded-full" />
        <h2 className="absolute inset-0  flex items-center justify-center h-16 font-bold text-xl">
          About me
        </h2>
      </div>
      <div className="flex items-center justify-center  text-center">
        <div className="w-full sm:w-3/5 ">
          <p>
            문제가 생기더라도 <span className="font-bold">주체적인 입장</span>
            에서 고민하여{" "}
            <span className="font-bold">
              {" "}
              좀 더 나은 방법이나 해결책을 찾을 수 있는 일
            </span>
            을 하고 싶었습니다.
          </p>
          <p>그리고 마침내 Frontend를 만났습니다.</p>
          <br />
          <p>
            코드 구성과 UI/UX를 어떻게 만드느냐에 따라 천차만별의 결과를 내놓을
            수 있는 Frontend 개발이 가진{" "}
            <span className="font-bold">가능성이 즐겁습니다.</span>
          </p>
          <br />
          <p>
            어떤 문제를 발견했을때 대충 넘어가지 않고{" "}
            <span className="font-bold"> 끈질기게 파고듭니다. </span>
            고심끝에 문제의 원인을 찾고
            <span className="font-bold"> 해결 해냈을 때는 희열</span> 을
            느낍니다.
          </p>
        </div>
      </div>
    </section>
  );
}
