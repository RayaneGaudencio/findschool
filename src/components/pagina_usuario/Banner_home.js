import styled from 'styled-components'

const BannerHomeStyle = styled.div`
    margin-top: 30px;
`

const BannerHome = ({ children }) => {
    return (
        <BannerHomeStyle>
            {children}
        </BannerHomeStyle>
    )
}

export default BannerHome