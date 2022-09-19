import React, {useContext} from "react";
import "@site/src/components/Homepage/homepage.css";
import "@site/src/components/Homepage/homepage-adaptive.css";
import styles from "@site/src/components/Homepage/homepage.module.css";
import clsx from "clsx";
import Button from "@site/src/shared/Button";
import Select from "@site/src/shared/Select";
import SelectItem from "@site/src/shared/Select/SelectItem";
import {AuthorizationContext} from "@site/src/contexts/Authorization";
// @ts-ignore
import logo from "@site/static/img/logo.png";
// @ts-ignore
import main from "@site/static/img/main.png";

function UserPanel({user}): JSX.Element {
    const {userName, avatar} = user || {};
    return (
        <Select
            className='user-select'
            listClassName='user-select-list'
            title={(
                <React.Fragment>
                    <img className='user' title={userName} src={avatar} alt={userName}/>
                    <div className='user-select-arrow' />
                </React.Fragment>
            )}
        >
            <SelectItem title="Projects" href={`https://gitlocalize.com/users/${userName}`}/>
            <SelectItem title="Profile" href="https://gitlocalize.com/settings/profile"/>
            <SelectItem title="Sign Out" href="https://gitlocalize.com/signout"/>
        </Select>
    )
}

export default function Homepage(): JSX.Element {
    const authorization = useContext(AuthorizationContext);

    return (
        <div className="homepage">
            <div className="header__container header">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex">
                        <div className="navigation__container">
                            <a className="logo-link" href="/">
                                <img src={logo} alt="logo" width="198" height="32"/>
                            </a>

                            <nav className="navigation">
                                <a className="link navigation__link" href="#features">Features</a>
                                <a className="link navigation__link" href="#projects">Projects</a>
                                <a className="link navigation__link" href="https://blog.gitlocalize.com/">Blog</a>
                                <a className="link navigation__link" href="https://docs.gitlocalize.com/">Docs</a>
                            </nav>
                        </div>
                    </div>
                    <div className="homepage__flex">
                        {(authorization.token)
                            ? (<UserPanel user={authorization.user}/>)
                            : (<Button className="auth-button" href="https://gitlocalize.com/auth/grant">Sign in with GitHub</Button>)}
                    </div>
                </div>
            </div>

            <div className="homepage__container main">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-6 flex-m-5">
                        <div className="main__title">Continuous Localization for GitHub Projects</div>
                        <div className="main__description">Create sustainable translation workflows with the docs-as-code approach at the core</div>
                        <div className="main__actions">
                            {!authorization.token && <Button className="github-button" href="https://gitlocalize.com/auth/grant">Get started with GitHub</Button>}
                            <Button className="demo-button" href="#demo">Watch Demo</Button>
                        </div>
                    </div>
                    <div className="homepage__flex main__app-img-container flex-l-4 flex-m-5 flex-s-10">
                        <img src={main} alt="main" width="400" height="323"/>
                    </div>
                </div>
            </div>

            <div className="homepage__container features" id="features">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex">
                        <div className="features__title">Features</div>
                        <div className="features__description">Here's what makes GitLocalize a great fit for GitHub-based localization projects:
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__container repository" id="repository">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-5 flex-m-6 flex-s-10">
                        <div className="repository__img-container">
                            <div className="repository__img"/>
                        </div>
                    </div>
                    <div className="repository__sync homepage__flex flex-l-5 flex-m-3">
                        <div className="repository__sync-img"/>
                        <div className="repository__sync-title">2-Way Sync with the Repository</div>
                        <div className="repository__sync-description">Your repository is the single source of truth. GitLocalize tracks changes in both the source and translated documents and pulls them into the project.
                        Translations added on GitLocalize are sent to the repository via a pull request.
                        <br/>  <br/>
                        Have existing translations that need to be imported? No problem! Those will be synced into the project.
                        </div>
                    </div>

                </div>
            </div>

            <div className="homepage__container parsing" id="parsing">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10">
                        <div className="parsing__img"/>
                        <div className="parsing__title">Continuous Translation of Updates</div>
                        <div className="parsing__description">Easily see what parts of your document have been updated and need to be translated again in the side-by-side editor.
                        <br/><br/>GitLocalize parses your files into translatable segments, making it easier to stay on top of updates and keep translations up-to-date.</div>
                        <div className="parsing__app-img-container">
                            <div className="parsing__app-img"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__container teamwork" id="teamwork">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-5 flex-m-6 flex-s-10">
                        <div className="teamwork__app-img-container">
                            <div className="teamwork__app-img"/>
                        </div>
                    </div>
                    <div className="teamwork__info homepage__flex flex-l-5 flex-m-3">
                        <div className="teamwork__info-img"/>
                        <div className="teamwork__info-title">Community, Vendors and Teamwork</div>
                        <div className="teamwork__info-description">Engage your community, work with in-house translators and vendors, or combine all three to build a sustainable translation pipeline.</div>
                    </div>
                </div>
            </div>

            <div className="homepage__container cattools" id="cattools">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10">
                        <div className="cattools__img"/>
                        <div className="cattools__title">Translation Consistency Tools</div>
                        <div className="cattools__description">Ensure translation style and terminology are consistent by using Translation Memory and Glossaries.
                        <br/><br/>In dynamically updating projects where a lot of text is reused across multiple documents, Translation Memory helps reduce translation costs and turnarund times.
                        </div>
                        <div className="cattools__app-img-container">
                            <div className="cattools__app-img"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__container projects" id="projects">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10 flex-s-10">
                        <div className="projects__title">Projects Already Using GitLocalize</div>
                        <div className="projects__description">Check out some of the awesome public projects that use Gitlocalize:</div>
                    </div>
                </div>

                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-3 flex-m-3 flex-s-10">
                        <div className="project" id="google">
                            <div className="project__side">
                                <div className="project__img google_img"/>
                                <a className="project__title project__link" href="https://gitlocalize.com/repo/6062">GoogleChrome/web.dev</a>
                                <div className="project__description">Building a better web</div>
                                {/*<div className="project__languages">17 Languages</div>*/}
                            </div>
                            <div className="project__side project__arrow-container">
                                <Button className="project__arrow" href="https://gitlocalize.com/repo/6062">{''}</Button>
                            </div>
                        </div>
                    </div>

                    <div className="homepage__flex flex-l-3 flex-m-3 flex-s-10">
                        <div className="project" id="qiskit">
                            <div className="project__side">
                                <div className="project__img qiskit_img"/>
                                <a className="project__title project__link" href="https://gitlocalize.com/Qiskit/platypus">Qiskit/platypus</a>
                                <div className="project__description">Open-Source Quantum Development</div>
                                {/*<div className="project__languages">4 Languages</div>*/}
                            </div>
                            <div className="project__side project__arrow-container">
                                <Button className="project__arrow" href="https://gitlocalize.com/Qiskit/platypus">{''}</Button>
                            </div>
                        </div>
                    </div>

                    <div className="homepage__flex flex-l-3 flex-m-3 flex-s-10">
                        <div className="project" id="tensorflow">
                            <div className="project__side">
                                <div className="project__img tensorflow_img"/>
                                <a className="project__title project__link" href="https://gitlocalize.com/repo/4592">tensorflow/docs-l10n</a>
                                <div className="project__description">An Open Source Machine Learning Framework for Everyone</div>
                                {/*<div className="project__languages">12 Languages</div>*/}
                            </div>
                            <div className="project__side project__arrow-container">
                                {/*<div className="project__arrow"/>*/}
                                <Button className="project__arrow" href="https://gitlocalize.com/repo/4592">{''}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__container review" id="review">
                <div className="homepage__container--adaptive">
                    <div className="review__info homepage__flex">
                        <div className="review__info-side flex-l-2 flex-m-3">
                            <div className="review__info-avatar"/>
                        </div>
                        <div className="review__info-side flex-l-8 flex-m-6">
                            <div className="review__info-description">
                                <div className="review__info-paragraph">
                                    We use GitLocalize to localize our company's WebAPI documentation. GitLocalize is extraordinarily convenient, flexible, and dynamic. We were pleasantly surprised to find that localization takes an extremely short time!
                                </div>
                                <div className="review__info-paragraph">
                                    Translations can be managed statically on a file level and also can be compared to the original by segment. This makes managing the work absolutely seamless. We are able to create a consistent translation throughout the entire website with GitLocalize. To say we are impressed is an understatement.
                                </div>
                            </div>
                            <div className="review__info-name">Yuki Iizuka</div>
                            <div className="review__info-organisation">Val Laboratory</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage__container advantages" id="advantages">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10 flex-s-10">
                        <div className="advantages__title">How It Works</div>
                        <div className="advantages__description">We made this short video to demonstrate how GitLocalize works</div>
                        <iframe className="advantages__video" id="demo" src="https://www.youtube.com/embed/PoSjHoEWV3w" frameBorder="0"
                                allowFullScreen/>
                    </div>
                </div>
            </div>

            <div className="homepage__container enjoy" id="enjoy">
                <div className="homepage__container--adaptive">
                    <div className="homepage__flex flex-l-10 flex-m-10 flex-s-10">
                        <div className="enjoy__title">Create your first project now!</div>
                        {!authorization.token && <Button className="github-button enjoy__button" href="https://gitlocalize.com/auth/grant">Get started with GitHub</Button>}
                    </div>
                </div>
            </div>

            <div className="homepage__container footer">
                <div className="homepage__container--adaptive">
                    <div className="footer__container homepage__flex">
                        <div className="footer__side">
                            <div className="logo__img"/>
                            <div className="logo__title">Continuous Localization for GitHub Projects</div>
                        </div>
                        <div className="footer__side">
                            <div className="footer__menu-container">
                                <div className="footer__menu footer__features">
                                    <div className="footer__menu-title">Features</div>
                                    <div className="footer__menu-items">
                                        <a className="footer__menu-item" href="#repository">2-Way Sync</a>
                                        <a className="footer__menu-item" href="#parsing">Continuous Translation</a>
                                        <a className="footer__menu-item" href="#teamwork">Teamwork</a>
                                    </div>
                                </div>
                                <div className="footer__menu footer__projects">
                                    <div className="footer__menu-title">Contribute to Projects</div>
                                    <div className="footer__menu-items">
                                        <a className="footer__menu-item" href="#google">GoogleChrome/web.dev</a>
                                        <a className="footer__menu-item" href="#qiskit">Qiskit/platypus</a>
                                        <a className="footer__menu-item" href="#tensorflow">tensorflow/docs-l10n</a>
                                    </div>
                                </div>
                                <div className="footer__menu footer__company">
                                    <div className="footer__menu-title">Company</div>
                                    <div className="footer__menu-items">
                                        <a className="footer__menu-item" href="https://gitlocalize.com/terms">Terms of Service</a>
                                        <a className="footer__menu-item" href="https://gitlocalize.com/privacy">Privacy Policy</a>
                                    </div>

                                    <div className="footer__menu-items">
                                        <a className="footer__menu-item" href="https://gitter.im/gitlocalize/Lobby">Community Chat</a>
                                        <a className="footer__menu-item" href="https://gitlocalize.com/inquiries/new">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="homepage__container--adaptive">
                    <div className="homepage__flex social">
                        <Button className="facebook" href="https://www.facebook.com/gitlocalize">{''}</Button>
                        <Button className="twitter" href="https://twitter.com/gitlocalize">{''}</Button>
                    </div>
                    <div className="homepage__flex">
                        <div className="copyright">© {new Date().getFullYear()} All rights reserved</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
