import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card border-dark shadow-lg">
                        <div className="card-header  bg-dark text-white text-center">
                            <h2>Profile</h2>
                        </div>
                        <div className="card-body text-center">
                            <img 
                                src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/357017665_1320199732253650_9005577808211231397_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGGLhZjWt6WAAMDhiKsPiBuFqP0l1KNDLIWo_SXUo0Msji4Ja7tcZ5FoUm88sFU6hgr8QABqCdrb2_FReqKmlt7&_nc_ohc=XZv6dLgiq08Q7kNvgGLLZPq&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=AOBtrpKyX-Hb5otz0OKlQbX&oh=00_AYDmfluOxuUp3xBOFIqYkV0C4oi7hJMsh0lSon5eDl1uxg&oe=674DC582" 
                                alt="Profile" 
                                className="rounded-circle mb-3"
                                width="250"
                            />
                            <h4 className="text-dark">นางสาวนันทิกานต์ คำแหลง</h4>
                            <h6 className="text-muted">Miss Nanthikan Khamlaeng</h6>
                            <p>นักเรียนนักศึกษา || สาขาเทคโนโลยรสารสนเทศ</p>
                            <hr />
                            <ul className="list-group list-group-flush text-start">
                                <li className="list-group-item">
                                    <strong>สถานศึกษา:</strong> วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่
                                </li>
                                <li className="list-group-item">
                                    <strong>สาขา:</strong> เทคโนโลยีสารสนเทศ
                                </li>
                                <li className="list-group-item">
                                    <strong>ระดับ:</strong> ประกาศนียบัตรวิชาชีพชั้นสูง ชั้นปีที่ 1
                                </li>
                                <li className="list-group-item">
                                    <strong>วันเกิด:</strong> 11 มิถุนายน 2548
                                </li>
                                <li className="list-group-item">
                                    <strong>อายุ:</strong> 19 ปี
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
