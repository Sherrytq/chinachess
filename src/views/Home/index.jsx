import React from "react";
import { Layout, Button, Divider, Row, Col, Icon, Card, List } from "antd";
import Login from "./../Login";
import RankItem from "./RankItem";
import "./index.less";
import image_logo from "./logo.png";
import postImg from "./post.jpg";
import headerBg from "./headerbg.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    const { Meta } = Card;
    const posts = [
      {
        imgSrc: postImg,
        postTitle: "this is the title",
        postRescource: "FM",
        postWriter: "Jack",
        postTime: 1,
        postContent:
          "The PRO Chess League has always been known for its innovative formats. This Tuesday and Friday, we debut our first new format of 2019: "
      },
      {
        imgSrc: postImg,
        postTitle: "this is the title",
        postRescource: "FM",
        postWriter: "Jack",
        postTime: 1,
        postContent:
          "The PRO Chess League has always been known for its innovative formats. This Tuesday and Friday, we debut our first new format of 2019: "
      },
      {
        imgSrc: postImg,
        postTitle: "this is the title",
        postRescource: "FM",
        postWriter: "Jack",
        postTime: 1,
        postContent:
          "The PRO Chess League has always been known for its innovative formats. This Tuesday and Friday, we debut our first new format of 2019: "
      },
      {
        imgSrc: postImg,
        postTitle: "this is the title",
        postRescource: "FM",
        postWriter: "Jack",
        postTime: 1,
        postContent:
          "The PRO Chess League has always been known for its innovative formats. This Tuesday and Friday, we debut our first new format of 2019: "
      },
      {
        imgSrc: postImg,
        postTitle: "this is the title",
        postRescource: "FM",
        postWriter: "Jack",
        postTime: 1,
        postContent:
          "The PRO Chess League has always been known for its innovative formats. This Tuesday and Friday, we debut our first new format of 2019: "
      },
      {
        imgSrc: postImg,
        postTitle: "this is the title",
        postRescource: "FM",
        postWriter: "Jack",
        postTime: 1,
        postContent:
          "The PRO Chess League has always been known for its innovative formats. This Tuesday and Friday, we debut our first new format of 2019: "
      }
    ];
    const siderInfo = [
      {
        title: "Member",
        number: 10
      },
      {
        title: "Games Today",
        number: 2880
      },
      {
        title: "Players Online",
        number: 100
      },
      {
        title: "Titled Online",
        number: 293
      }
    ];
    const blitzData = [
      {
        avator: "",
        playResource: "GM",
        playName: "sherry",
        playRankNum: 1244
      },
      {
        avator: "",
        playResource: "GM",
        playName: "sherry",
        playRankNum: 1244
      },
      {
        avator: "",
        playResource: "GM",
        playName: "sherry",
        playRankNum: 1244
      },
      {
        avator: "",
        playResource: "GM",
        playName: "sherry",
        playRankNum: 1244
      },
      {
        avator: "",
        playResource: "GM",
        playName: "sherry",
        playRankNum: 1244
      }
    ];
    return (
      <div className="Home">
        <div style={{ width: "80%", margin: "auto" }}>
          <header style={{ background: `url(${headerBg}) no-repeat` }}>
            <div className="headerBasicInfo">
              <div className="headerLogo">
                <img src={image_logo} alt="logo" width="30" />
                <span
                  style={{
                    fontSize: 20,
                    marginLeft: 3,
                    height: 30,
                    lineHeight: "30px",
                    verticalAlign: "middle"
                  }}
                >
                  Chinese Chess
                </span>
              </div>
              <div className="headerIntro">
                <h1>Play chess introduction.</h1>
                <ul>
                  <li>step1</li>
                  <li>step2</li>
                  <li>step3</li>
                </ul>
              </div>
              <Button
                style={{
                  backgroundColor: "#F5A623",
                  border: "none",
                  padding: "10px 40px",
                  height: "80px",
                  fontSize: "2.8rem"
                }}
              >
                Play Now
              </Button>
            </div>
            <div className="headerFnBtn">
              <Row gutter={24}>
                <Col span={5}>
                  <i className="iconfont icon-studying" />
                  <span>Learn To Play</span>
                </Col>
                <Col span={5}>
                  <i className="iconfont icon-online" />
                  <span>Play Online</span>
                </Col>
                <Col span={5}>
                  <i className="iconfont icon-computer" />
                  <span>Play Computer</span>
                </Col>
                <Col span={5}>
                  <i className="iconfont icon-mobile" />
                  <span>Play On Mobile</span>
                </Col>
                <Col span={4}>
                  <i className="iconfont icon-puzzle" />
                  <span>Solve Puzzles</span>
                </Col>
              </Row>
            </div>
            <div className="headerAd">
              <h1>这是广告位</h1>
            </div>
          </header>
          <Row className="HomeContainer" gutter={24}>
            <Col className="HomeContent" span={17} >
              <div className="post">
                <img src={posts[0].imgSrc} alt="" width="100%" />
                <h1 style={{ color: "#005e94", marginBottom: 0 }}>
                  {posts[0].postTitle}
                </h1>
                <i className="iconfont icon-computer" />
                <span>{posts[0].postRescource}</span>
                <span>{posts[0].postWriter}</span>
                <Divider
                  type="vertical"
                  style={{ margin: "0 5px", backgroundColor: "#312e2b" }}
                />
                <span>{posts[0].postTime}hrs ago</span>
                <p>{posts[0].postContent}</p>
              </div>

              <List
                grid={{
                  gutter: 24,
                  column: 2
                }}
                dataSource={posts.slice(1)}
                renderItem={item => (
                  <List.Item>
                    <div className="post">
                      <img src={item.imgSrc} alt="" width="320" />
                      <h1>{item.postTitle}</h1>
                      <i className="iconfont icon-computer" />
                      <span>{item.postRescource}</span>
                      <span>{item.postWriter}</span>
                      <Divider type="vertical" />
                      <span>{item.postTime}</span>
                      <p>{item.postContent}</p>
                    </div>
                  </List.Item>
                )}
              />
            </Col>
            <Col className="HomeSider" span={7}>
              <div className="siderPlayInfo">
                {siderInfo.map(item => (
                  <div>
                    <i className="iconfont icon-computer" />
                    <span>{item.title}</span>
                    <span className="siderInfoNum">{item.number}</span>
                  </div>
                ))}
              </div>

              <div className="siderLogin">
                <Login />
              </div>

              <div className="siderRank">
                <h3>Top Titled Players (153 Online)</h3>
                <RankItem rankItemIofo={blitzData} title="Blitz" />
                <RankItem rankItemIofo={blitzData} title="Bullet" />
                <RankItem rankItemIofo={blitzData} title="Daily Chess" />
              </div>
            </Col>
          </Row>
          <footer>CopyRight@Mr.Liang </footer>
        </div>
      </div>
    );
  }
}

export default Home;
