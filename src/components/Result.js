import React, { Component, Fragment } from 'react';
import Intro from './Intro'
import TESTS from '../api/TESTS'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from '../App'
import { Button, Card } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import COPYBTN from '../api/DefaultImg/result-copy-link-btn.png';
import AGAINBTN from '../api/DefaultImg/result-to-again-btn.png';
import TOHOMEBTN from '../api/DefaultImg/result-to-home-btn.png';
import ReactGA from 'react-ga';
import ScriptTag from 'react-script-tag'

class Result extends Component {
    constructor(props){
        super(props)
        const _sharable_url = window.location.href;
        const _current_url = _sharable_url.split('/')
        const _current_test = _current_url.reverse()[2]
        const _current_result = _current_url[0]

        this.state = {
            mode:"result",
            sharable_url:_sharable_url,
            current_url:_current_url,
            current_test:_current_test,
            current_result:_current_result,
            num_shares_count:0,
        }
        this._onBackToStartButtonClick = this._onBackToStartButtonClick.bind(this)
        this._eventSenderGA = this._eventSenderGA.bind(this);
        this._onShareButtonClick = this._onShareButtonClick.bind(this);
    }
    
    _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
          });
    }
    _onBackToStartButtonClick(){
        this._eventSenderGA("Paging", "Click Re-test Button", "result page");
        this.setState({
            mode:"intro"
        })
    }
    _onShareButtonClick(){
        this.setState({
            num_shares_count:this.state.num_shares_count+1
        })
        this._eventSenderGA("Sharing", "Click Copy-link Button", "intro page");
        alert("링크가 복사됐어요!");
    }
    cpcBannerResultFooterScriptor(){
        if( this.state.sharable_url.includes("ktestone.com")) {
          return(
            <Fragment>
              <ins class="kakao_ad_area" style={{display:"none"}}
                data-ad-unit    = "DAN-9iBiNdMXgMni4I3u"
                data-ad-width   = "320"
                data-ad-height  = "100"></ins>
              <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
            </Fragment>
          )
        } else if(this.state.sharable_url.includes("https://kapable.github.io/")) {
          return(
            <Fragment>
              <ins class="kakao_ad_area" style={{display:"none"}}
                data-ad-unit    = "DAN-oXGz3zjd52vzl7Qh"
                data-ad-width   = "320"
                data-ad-height  = "100"></ins>
              <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
            </Fragment>
          )
        } else if(this.state.sharable_url.includes("localhost") || this.state.sharable_url.includes("niair.xyz")) {
            return(
              <Fragment>
                {/* 결과 푸터 */}
                <ins class="adsbygoogle"
                    style={{display:"block"}}
                    data-ad-client="ca-pub-2382342018701919"
                    data-ad-slot="3364974256"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
              </Fragment>
            )
          }
    }
    personalColorLinkRenderer(){
        if(this.state.current_test === "personalColor") {
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    >[ Go to English ver. ]</a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    >[ 日本語バージョンをやりに行く。 ]</a>
                </Fragment>
            )
        } else if(this.state.current_test === "personalColorJP") {
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    >[ 한국어 버전으로 하러가기 ]</a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorEng/"
                        className="to-personalColorOut-test-banner-text"
                    >[ Go to English ver. ]</a>
                </Fragment>
            )
        } else if(this.state.current_test === "personalColorEng") {
            return(
                <Fragment>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColor/"
                        className="to-personalColorOut-test-banner-text"
                    >[ 한국어 버전으로 하러가기 ]</a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalColorJP/"
                        className="to-personalColorOut-test-banner-text"
                    >[ 日本語バージョンをやりに行く。 ]</a>
                </Fragment>
            )
        }
    }
    pplBannerRenderer(){
        if(this.state.current_test === "personalIncense"){
            if(["BFleur","CMusk","HGreen","LBlanc","LBloom","PViolet"].includes(this.state.current_result)){
                let banner_img_src = 'https://images.ktestone.com/resultImages/duftDoft/bodySpray.jpeg'
                return(
                    <Fragment>
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalIncense/"
                        className="to-ppl-banner-text"
                        >
                            <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} />
                        </a>
                    </Fragment>
                )
            } else {
                let banner_img_src = 'https://images.ktestone.com/resultImages/duftDoft/handCreme.jpeg'
                return(
                    <Fragment>
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ktestone.com/kapable.github.io/personalIncense/"
                        className="to-ppl-banner-text"
                        >
                            <img src={banner_img_src} className='ppl-banner-img' alt={this.state.current_result} />
                        </a>
                    </Fragment>
                )
            }

        }
    }
    introPageRender(){

        const current_tests_path = '/' + this.state.current_test + '/';
        return(
            <Router basename='/kapable.github.io/'>
                <Switch>
                    <Route path={current_tests_path} component={()=><Intro test={this.state.current_test}/>} exact/>
                    <Redirect to={current_tests_path} />
                </Switch>
            </Router>
        )
    }

    resultRender(){
        // searching the result content by current url path

        let final_type = ''
        let final_desc = ''
        let img_src = ''
        let i = 0;
        let _current_test_contents ;
        while(i<TESTS.length){
            if(TESTS[i].info.mainUrl === this.state.current_test){
                _current_test_contents = TESTS[i] // for storytelling
                let j = 0;
                while(j<TESTS[i].results.length){
                    if(TESTS[i].results[j].query === this.state.current_result){
                        final_type = TESTS[i].results[j].type
                        final_desc = TESTS[i].results[j].desc
                        img_src = TESTS[i].results[j].img_src
                        break
                    }
                    j = j + 1;
                }
                // break
            }
            i = i + 1;
        }

        // return final result option
        // in case of storyTelling Type Quiz
        if(_current_test_contents.info.scoreType === "storyTelling" || _current_test_contents.info.scoreType === "typeCountingMBTI" || _current_test_contents.info.scoreType === "dualMBTI"){
            return (
                <Fragment>
                    <img src={img_src} className='result-img' alt={final_type} />
                </Fragment>
            )
        //  and other case of Type Quizes
        } else {
            // if there are not description text === only result img
            if(final_desc === ``){
                return (
                    <Fragment>
                        <img src={img_src} className='result-img' alt={final_type} />
                    </Fragment>

                )
            } else {
                return (
                    <Fragment>
                        <img src={img_src} className='result-img' alt={final_type} />
                        <Card className="result-card" bg="light">
                            {/* <Card.Img variant='top' src={img_src} className='result-img' alt={final_type} /> */}
                            <Card.Body className="result-p">
                                <Card.Text>{final_desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Fragment>

                )
            }
        }

    }

    mainPageRender(){
        return(
            <Router >
                <Switch>
                    <Route path='/' component={App} exact/>
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }

    goBack(){
        this.props.history.goBack();
    }

    resultPageRender(){
        return(
            <div className="result">
                <div className="result-header">
                    <h5 className="result-title">결과는...</h5>
                    <div className="result-value">
                        {this.resultRender()}
                    </div>
                    {/* PPL banner image */}
                    {this.pplBannerRenderer()}
                </div>

                {/* Kakao Adfit Result footer */}
                {this.cpcBannerResultFooterScriptor()}

                {/* if personalColor test's Result page for Link Banner */}
                {this.personalColorLinkRenderer()}

                <div className="share">
                    <h5 className="share-title">친구에게 공유하기</h5>
                    <div className="share">
                        <CopyToClipboard text={this.state.sharable_url}>
                            <Button className="share-btn">
                                <img
                                    src={COPYBTN}
                                    onClick={this._onShareButtonClick}
                                    className="share-btn-img"
                                    alt="링크 복사"
                                    />
                            </Button>
                        </CopyToClipboard>
                    </div>
                    <div className="re-test-btn">
                        <img
                            src={AGAINBTN}
                            className="re-test-btn-img"
                            onClick={this._onBackToStartButtonClick}
                            alt="테스트 다시하기"/>
                    </div>
                </div>
                <div className="back-to-main">
                    <img
                        src={TOHOMEBTN}
                        onClick={function(e) {
                            e.preventDefault();
                            this._eventSenderGA("Paging", "Click Back-to-main Button", "result page");
                            this.setState({
                                mode:"main"
                            })
                        }.bind(this)}
                        className="back-to-main-btn-img"
                        alt="다른 테스트 하러가기"
                        />
                </div>
            </div>

        );
    }

    pageRenderer(){
        let _page = []
        if(this.state.mode === "result") {
            _page = this.resultPageRender()
        } else if (this.state.mode === "intro") {
            _page =  this.introPageRender()
        } else if (this.state.mode === "main") {
            _page = this.mainPageRender()
        }
        return _page
    }


    render(){
        return(
            <div>
                {this.pageRenderer()}
            </div>
        );
    }
}

export default Result;
