import './Write.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

export default function Write() {
    const navigate = useNavigate();
    const [content, setContent] = useState({
        type: 0,
        user: '', 
        party: '', 
        password: '', 
        desc: '', 
        fee: 0,
        unit: 0
    });

    function goList() {
        navigate('/');
    }

    function onSave() {
        setContent(content);
        
        axios.post("http://localhost:8080/party", content)
        .then(res => {
            console.log('저장 성공!')
            goList()
        })
    }

    return <div className="write-container">
            <div className='line'>
                <div className='subject'>OTT 종류</div>
                <select name="type" id="type"
                    onChange={(e)=>setContent({...content, type: Number(e.target.value)})} 
                    >
                    <option value="1">넷플릭스</option>
                    <option value="2">티빙</option>
                    <option value="3">디즈니플러스</option>
                    <option value="4">왓챠</option>
                </select>
            </div>
            <div className="line">
                <div className='subject'>유저 이름</div>
                <input type="text" value={content.user} 
                    onChange={(e)=>setContent({...content, user: e.target.value})} 
                />
            </div>
            <div className="line">
                <div className='subject'>게시글 제목</div>
                <input type="text" value={content.party} 
                onChange={(e)=>setContent({...content, party: e.target.value})} 
                />
            </div>
            <div className="line">
                <div className='subject'>비밀번호</div>
                <input type="text" value={content.password} 
                onChange={(e)=>setContent({...content, password: e.target.value})} 
                />
            </div>
            <div className="line">
                <div className='subject'>내용</div>
                <input type="textarea" value={content.desc} 
                onChange={(e)=>setContent({...content, desc: e.target.value})} 
                />
            </div>
            <div className="line">
                <div className='subject'>가격</div>
                <input type="number" value={content.fee} 
                onChange={(e)=>setContent({...content, fee: Number(e.target.value)})} 
                />
            </div>
            <div className="line">
                <div className='subject'>결제 단위 (31/365)</div>
                <input type="number" value={content.unit} 
                onChange={(e)=>setContent({...content, unit: Number(e.target.value)})} 
                />
            </div>

            <button onClick={onSave}>작성하기</button>
            <button onClick={goList}>돌아가기</button>
        </div>
}
