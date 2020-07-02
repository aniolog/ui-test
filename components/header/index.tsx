import React from 'react';
import { HeaderContainer, Links, Link, HeaderContent } from './header.styled';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
//@ts-ignore
import Logo from '../../public/images/bellotero.svg';

const Header = () => {
    const links = useSelector(state => state.app.menu.items);
    const router = useRouter();
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={Logo} />
                <Links>
                    <Link>Home</Link>
                    {
                        links.map(
                            link => 
                                <Link 
                                    active={router.route === `/${link.route}`}
                                    onClick={() => router.push(`/${link.route}`)}
                                >
                                    {link.text}
                                </Link>
                        )
                    }
                </Links>
            </HeaderContent>
            
        </HeaderContainer>
    );
}

export default Header;