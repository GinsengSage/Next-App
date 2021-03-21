import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"next, react" + keywords}></meta>
                <title>Next</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text={'Home'}></A>
                <A href={'/users'} text={'Users'}></A>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar{
                      background: orange;
                      padding: 15px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;
