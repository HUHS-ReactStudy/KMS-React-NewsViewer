import styled from 'styled-components'

const NewsItemBlock = styled.div`
display:flex;
.thumbnail {
    margin-right:1rem;    
    img{
        display: block;
        width:160px;
        height:100px;
        object-fit: cover;
    }
}
.contents {
    h2{
        margin:0;
        a{
            color:black;
        }
    }
    p{
        margin:0;
        line-height:1.5;
        margin-top:0.5rem;
        white-space: normal;
    }
}
&+&{
    margin-top:3rem;
}
`;

const NewsItem = ({article}) =>{
    const {title,description,url,urlToImage} = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {/* rel은 href속성이 있는 곳에서만 쓸 수 있으며 현재 문서와 링크된 문서사이의 연관관계를 명시한다.
                        사용자에게 직접적인 영향은 없지만 브라우저나 검색엔진에게 링크 관련 정보를 주어 요청에 더욱 정확하게 대응하게함 */}
                        <img src={urlToImage} alt="thumbnail"/>
                    </a>
                </div>
            )}
            <div className='contents'>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )

}
export default NewsItem;
