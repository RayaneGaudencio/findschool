import styled from 'styled-components'

const BannerHomeStyle = styled.div`
`

const BannerHome = ({ children }) => {
    return (
        <BannerHomeStyle>
            {children}
        </BannerHomeStyle>
    )
}

export default BannerHome