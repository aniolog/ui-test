import React from 'react';
import { HeaderContainer, Links, Link } from './header.styled';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
//@ts-ignore
import Logo from '';
import { Content } from '../../styles/content';


const Header = () => {
    const links = useSelector(state => state.app.menu.items);
    const router = useRouter();
    return(
        <HeaderContainer>
            <img src={'../../public/images/bellotero.svg'} />
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
        </HeaderContainer>
    );
}

export default Header;