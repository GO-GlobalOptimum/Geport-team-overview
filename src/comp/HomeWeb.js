import back from "./image/intro_back.png"

function HomeWeb() {

    const buttonStyle = {
        backgroundColor: 'white', // 버튼의 배경색
        color: '#00695c', // 텍스트 색상
        border: '2px solid #00695c', // 테두리 색상과 두께
        borderRadius: '15px', // 더 납작한 모서리의 반지름
        padding: '5px 31px', // 얇고 길쭉한 내부 여백
        fontFamily: 'Arial, sans-serif', // 폰트 패밀리
        fontSize: '0.85rem', // 조금 더 작은 폰트 크기
        fontWeight: 'bold', // 폰트 두께
        textTransform: 'uppercase', // 대문자 변환
        cursor: 'pointer', // 마우스 오버 시 커서 변경
        outline: 'none', // 포커스 아웃라인 제거
        margin: '0 auto', // 가운데 정렬을 위한 마진
        display: 'block', // 블록 레벨 요소로 만들기
    };

    return (
        <div style={{height: '1000px'}}>
            <div style={{ height: '60%'}}>
                <div style={{ height: '100%', backgroundImage : 'url(' + back + ')' }}>                
                    <h1 style={{marginTop: '250px', fontSize : '3rem'}}>Geport, </h1>
                    <h1 style={{fontSize : '3rem'}}>블로그로 시작하는 </h1>
                    <h1 style={{marginTop : '-1.5%',fontSize : '3rem'}}>나만의 <span style={{color: "green"}}>퍼스널 브랜딩</span></h1>
                </div>
            </div>

            <div style={{height: '40%', display: 'flex'}}>
                {/* 첫 번째 반 */}
                <div style={{flex: 1, display: 'flex'}}>

                    <div style={{marginLeft : '100px'}}>
                        <div style={{textAlign: 'left'}}>
                            <button style={{...buttonStyle, display: 'block', margin: '0'}}>
                                Branding
                            </button>
                            <h2>퍼스널 브랜딩 시대,</h2>
                            <h2>나만의 브랜드를 만들고 싶다면?</h2>
                            <p>Geport와 함께 나만의 브랜딩을 구축하세요</p>
                        </div>
                    </div> 
                </div>
                
                {/* 두 번째 반 */}
                <div style={{flex: 1, display: 'flex'}}>
                    <div style={{marginLeft : '15%', marginTop :'25%'}} >
                        <div>
                            <div style={{textAlign: 'left'}}>
                                <button style={{...buttonStyle, display: 'block', margin: '0'}}>
                                    Making
                                </button>
                                <h2>꾸준히 기록한 블로그,</h2>
                                <h2>활용할 방법을 찾고 있다면?</h2>
                                <p>Gepor에서 쉽고 효율적으로 블로그를 관리하세요</p>
                            </div>
                        </div>  
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeWeb;
