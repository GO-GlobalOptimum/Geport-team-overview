import React from 'react';
import '../font.css'; 
import '../grid.min.css'; 
import '../style.css';

function MiddlePage() {
    return(
        <div class="container">

        <div class="row">
            <div class="col-9">
                <div class = "card1">
                    <img src="img/Chart.png" width="150px" height="150px"/>
                    <div class="text1">
                        <h2>한눈에 보는 내 블로그</h2>
                        <br/>
                        <p>게시물의 통게와 요약정보를 자동으로 생성해 내 블로그의 현황을 한눈에 알 수 있어요</p>
                    </div>
                </div>
                

            </div>
        </div>

                
            <div class="row">
                <div class="col-3">
                    
                </div>
                <div class="col-9">
                    <div class="card2">
                        <div class="text2">
                            <h2>나만의 AI 비서</h2>
                            <br/>
                        <p>내가 쓴 블로그를 바탕으로 AI가 퍼스널 브랜딩에 필요한 보고서를 작성해요</p>
                        
                        </div>
                        <img src="img/Hand With Pen.png" width="150px" height="150px"/>
                    </div>
                
                </div>
            </div>

            <div class="row">
                <div class="col-9">
                    <div class="card3">
                        <img src="img/Document.png" width="150px" height="150px" />
                        <div class="text3">
                            <h2>기존 블로그도 문제 없이</h2>
                            <br/>
                            <p>꾸준히 블로그를 쓰셨나요? 링크를 복사하세요! 손쉽게 나만의 보고서를 받아볼 수 있어요</p>
                        </div>
                      

                    </div>

                </div>
            </div>

            <div class="row">

                <div class="col-3"></div>
                <div class="col-9">
                    <div class="card4">
                        <img src="img/Moleskine.png" width="150px" height="150px"/>
                        <div class="text4">
                            <h2>블로거 커뮤니티</h2>
                            <br/>
                            <p>커뮤니티에서 인사이트를 서로 공유해 퍼스널 브랜딩을 보다 전문적으로 할 수 있어요</p>
                        </div>

                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-9">
                <div class="card5">
                    <img src="img/Search.png" width="150px" height="150px"/>
                    <div class="text5">
                        <h2>내 블로그에 필요한 정보만</h2>
                        <br/>
                        <p>RAG를 활용한 검색 기능으로 내가 원하는 정보만 찾을 수 있어요</p>
                    </div>

                </div>

                </div>
            </div>
            

        
    </div>

)
}

export default MiddlePage;