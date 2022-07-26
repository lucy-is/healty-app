import React, { useState, useEffect } from 'react'
import axios from 'axios'

function GetSupple() {
    const [supples, setSupples] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [inputValue, setInput] = useState(null)
    //F3qZpDpoCIhqF8zuV%2B1%2BE8UPiaRlfmy7fEZAJ2YTZ%2BcDwyauDgPE30CZW3cCs2kV2mTteWoCCN9QuIZfS7oZWA%3D%3D
    //F3qZpDpoCIhqF8zuV+1+E8UPiaRlfmy7fEZAJ2YTZ+cDwyauDgPE30CZW3cCs2kV2mTteWoCCN9QuIZfS7oZWA==

    const fetchSupples = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 supples를 초기화하고
          setError(null);
          setSupples(null);
          setInput("")
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const params = {}
          params.ServiceKey = "F3qZpDpoCIhqF8zuV+1+E8UPiaRlfmy7fEZAJ2YTZ+cDwyauDgPE30CZW3cCs2kV2mTteWoCCN9QuIZfS7oZWA=="
          // params.Entrps = "성풍양행"
          params.Prduct = inputValue
          // params.Sttemnt_no = null
          params.pageNo = null
          params.numOfRows = null
          params.type = "json"
          const response = await axios.get(
            '/api/getHtfsItem',
            {params: params},
          );
          setSupples(response.data.header.resultMsg); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
    };
    
    useEffect(() => {
        fetchSupples();
    }, []);
    
    if (loading) return <div>로딩중..</div>; 
    if (error) return <div>에러가 발생했습니다</div>;

    // 아직 supples 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
    if (!supples) return null;

    // 드디어 supples 성공적으로 받아와 진 상태입니다.
    return (
        <div>
          <input type="text" name="name" value={inputValue} onChange={e => setInput(e.target.value)}/>
            <ul>
            {/* {supples.map(item => (
                <li key={item.id}>
                {item.username} ({item.name})
                </li>
            ))} */}
            {supples}
            </ul>
            <button onClick={ fetchSupples }>다시 조회하기</button>
        </div>
    );
}

export default GetSupple;