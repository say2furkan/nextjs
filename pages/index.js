import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// const PostLink = (props)=>{
//     return(
//     <li>
//         <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}><a>{props.title}</a></Link>
//     </li>
//     );
// }


// const Index = () => {
//     return (
//         <div>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink id = "hello-nextjs" title="Hello FNext.js" />
//                 <PostLink id = "learn-nextjs" title="Learn Next.js is awesome" />
//                 <PostLink id = "deploy-nextjs" title="Deploy apps with Zeit" />
//             </ul>
//         </div>
//     )
// }

const Index = props => {
    return (
        <Layout>
            <h1>Batman TV Shows</h1>
            <ul>
                {props.shows.map(show => (
                    <li key={show.id}>
                        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))}

            </ul>

        <style jsx>{`
            h1,
            a {
              font-family: 'Arial';
            }
    
            ul {
              padding: 0;
            }
    
            li {
              list-style: none;
              margin: 5px 0;
            }
    
            a {
              text-decoration: none;
              color: blue;
            }
            a:hover{
                opacity:0.6;
                color:grey
            }
          `}</style>

        </Layout>
    );
};



// const Index = props =>(
//     <Layout>
//       <h1>Batman TV Shows</h1>
//       <ul>
//         {props.shows.map(show => (
//           <li key={show.id}>
//             <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//               <a>{show.name}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </Layout>
//   );



Index.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`);
    return {
        shows: data.map(entry => entry.show)
    }
}


export default Index;