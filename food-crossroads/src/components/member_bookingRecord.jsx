import React, { Component } from "react";
import Axios from "axios";
import Header from "./header";
import Footer from "./footer";
import $ from "jquery";
import "../css/member.css";

class BookingRecord extends Component {
  state = {
    id: this.props.match.params.id,
    List: [
      {
        booking_date: "2022-01-08",
        restaurant_name: "水相餐廳",
        user_name: "李曉明",
        booking_time: "2022-01-08",
        booking_peoplenumber: 3,
        booking_id: 1,
        id: 1,
        booking_service: "需要嬰兒座椅",
        user_email: "asdf@gmail.com",
      },
    ],
  };

  async componentDidMount() {
    console.log(this.props.match.params.id);
    var url =
      "http://localhost:8000/bookingmanagement/list/" +
      this.props.match.params.id;
    var result = await Axios.get(url);
    this.state.List = result.data;
    console.log(result.data);
    this.setState({});

    $(".detail_btn").on("click", function () {
      $(".modal-detail").css("display", "block");
    });

    $(".btn_close").on("click", function () {
      $(".modal-detail").css("display", "none");
    });
  }

  render() {
    return (
      <React.Fragment>
        <header className="header_page">
          <Header />
        </header>

        <aside className="aside_menu">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href={`/member/${this.props.match.params.id}`}>會員資料</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="#">訂位管理</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href={`/ordermanagement/${this.props.match.params.id}`}>
                    訂餐管理
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </aside>

        <input type="checkbox" name="aside_menu_chk" id="aside_menu_chk" />
        <div className="mobile_aside_menu">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="#">會員資料</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="booking_manage.html">訂位管理</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="order_manage.html">訂餐管理</a>
                </h4>
              </div>
            </div>
          </div>
          <label for="aside_menu_chk" className="aside_menu_chk">
            <i className="fas fa-angle-right"></i>
          </label>
        </div>

        <div id="booking_manage">
          <div className="container-fluid table_container">
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>訂位人</th>
                      <th>訂位餐廳</th>
                      <th>訂位日期</th>
                      <th>訂位時間</th>
                      <th>訂位人數</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.List.map((item, index) => (
                      <tr>
                        <td className="mobile_td">{item.user_name}</td>
                        <td className="mobile_td">{item.restaurant_name}</td>
                        <td className="mobile_td">{item.booking_date}</td>
                        <td className="mobile_td">{item.booking_time}</td>
                        <td className="mobile_td">
                          {item.booking_peoplenumber}
                        </td>
                        <td className="btn_td">
                          <a href={`/cancelbooking/${item.booking_id}`}>
                            <button className="cancel_btn">取消訂位</button>
                          </a>
                          <button className="detail_btn" id="detail_btn">
                            詳細內容
                          </button>
                          <div class="modal modal-detail" tabIndex="-1">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h4 class="modal-title">詳細內容</h4>
                                </div>

                                <div class="detail_modal_body">
                                  姓名：{item.user_name} <br />
                                  手機：{item.user_tel}
                                  <br />
                                  電子郵件：{item.user_email} <br />
                                  <br />
                                  訂位編號：00005 <br />
                                  訂位人數：{item.booking_peoplenumber} <br />
                                  訂位日期：{item.booking_date} <br />
                                  取位時間：{item.booking_time}
                                  <br />
                                  備註：{item.booking_service}
                                </div>

                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn_close"
                                    data-dismiss="modal"
                                  >
                                    返回
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button className="comment_btn">評價</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer_page">
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default BookingRecord;
