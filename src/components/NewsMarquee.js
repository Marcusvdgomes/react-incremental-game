import Ticker from 'react-ticker'

const mensagens = [
    "Mensagem número 1",
    "Mensagem número 2",
    "Mensagem número 3",
    "Mensagem número 4",
    "Mensagem número 5",
    "Mensagem número 6",
    "Mensagem número 7",
    "Mensagem número 8",
    "Mensagem número 9",
    "Mensagem número 10"
  ];

  const GetMensagens = () => {
    return (
      <h1>{mensagens[Math.floor(Math.random() * (mensagens.length - 1))]}</h1>
    );
  };

function NewsMarquee(props) {
    if (props.show) {
        return (
          <div className="border-t border-b border-black bg-white  dark:bg-black dark:border-white dark:text-white">
            <Ticker mode="await" offset="run-in" speed={10}>
              {() => <GetMensagens />}
            </Ticker>
          </div>
        );
      } else {
        return <div></div>;
      }
  }
  
  export default NewsMarquee;