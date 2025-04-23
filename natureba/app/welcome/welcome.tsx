import { useState } from "react";
import imagem_home from "/imagem_home.svg";
import imagem_joao from "/joao.jpg"
import logo from "/logo_verde.svg"
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react"

export function Welcome() {
  const itens = [
    <motion.p className="w-full bg-[white] mt-4 p-5 rounded-sm" initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", bounce: 0.2 }}>Somos apaixonados por saúde, bem-estar e sustentabilidade. A <span className="font-[Judson]">natureba</span>, idealizada por João Silva, nasceu com o propósito de oferecer produtos naturais de alta qualidade para quem busca um estilo de vida mais equilibrado e consciente.</motion.p>,
    <motion.p className="w-full bg-[white] mt-4 p-5 rounded-sm" initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", bounce: 0.2 }}>Com anos de experiência no comércio de alimentos orgânicos, suplementos e cosméticos veganos, decidimos ir além do ponto físico e levar nossa loja para o ambiente digital — conectando você a um universo de opções saudáveis, com toda a praticidade e segurança das compras online.</motion.p>,
    <motion.p className="w-full bg-[white] mt-4 p-5 rounded-sm" initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", bounce: 0.2 }}>Aqui, cada produto é escolhido com cuidado, pensando no seu bem-estar e no impacto positivo que podemos gerar juntos no planeta. Valorizamos marcas éticas, ingredientes naturais e práticas sustentáveis.</motion.p>,
    <motion.p className="w-full bg-[white] mt-4 p-5 rounded-sm" initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", bounce: 0.2 }}>Além de um catálogo completo e atualizado, nossa loja virtual oferece uma navegação simples, formas de pagamento seguras, opções de frete ou retirada na loja e um blog com conteúdos inspiradores sobre vida saudável, nutrição e autocuidado.</motion.p>
  ]

  const [index, setIndex] = useState(-1);
  return (
    <main className="w-full">
      <section className="w-full grid grid-flow-col grid-cols-2 h-dvh" style={styles.homePage}>
        <div className="col-span-1 flex items-center justify-center">
          <div className="text-[#8B5A2B] flex flex-col text-[80px]/20 font-[Judson] m-0">
            <p><span className="text-[#3E7D4E]">na</span>tural</p>
            <p><span className="text-[#3E7D4E]">tu</span>rbinado</p>
            <p><span className="text-[#3E7D4E]">re</span>sponsável</p>
            <p><span className="text-[#3E7D4E]">ba</span>ratíssimo</p>
          </div>
        </div>
      </section>

      <section id="sobre" className="w-full" style={styles.sobreSection}>
        <div className="w-full h-full p-10 text-[#8B5A2B]">
          <div className="w-full flex justify-center">
            <h1 className="text-[40px] font-[Judson] w-fit rounded-sm px-5 py-1">Sobre nós</h1>
          </div>
          <br />
          <div className="w-full grid grid-flow-col grid-cols-4">
            <div className="col-span-1 flex justify-center cursor-pointer items-center">
              <span className="text-[40px]! material-symbols-outlined rounded-sm bg-[white] p-3 hover:rounded-[10px] hover:text-[white] hover:bg-[#8B5A2B]" style={index === 0 ? { borderRadius: "10px", background: "#8B5A2B", color: "white" } : undefined} onClick={() => setIndex(0)}>store</span>
            </div>
            <div className="col-span-1 flex justify-center cursor-pointer items-center">
              <span className="text-[40px]! material-symbols-outlined rounded-sm bg-[white] p-3 hover:rounded-[10px] hover:text-[white] hover:bg-[#8B5A2B]" style={index === 1 ? { borderRadius: "10px", background: "#8B5A2B", color: "white" } : undefined} onClick={() => setIndex(1)}>event</span>
            </div>
            <div className="col-span-1 flex justify-center cursor-pointer items-center">
              <span className="text-[40px]! material-symbols-outlined rounded-sm bg-[white] p-3 hover:rounded-[10px] hover:text-[white] hover:bg-[#8B5A2B]" style={index === 2 ? { borderRadius: "10px", background: "#8B5A2B", color: "white" } : undefined} onClick={() => setIndex(2)}>shopping_bag</span>
            </div>
            <div className="col-span-1 flex justify-center cursor-pointer items-center">
              <span className="text-[40px]! material-symbols-outlined rounded-sm bg-[white] p-3 hover:rounded-[10px] hover:text-[white] hover:bg-[#8B5A2B]" style={index === 3 ? { borderRadius: "10px", background: "#8B5A2B", color: "white" } : undefined} onClick={() => setIndex(3)}>captive_portal</span>
            </div>
          </div>

            {index === 0 &&
                itens[index]
            }
            {index === 1 &&
                itens[index]
            }
            {index === 2 &&
                itens[index]
            }
            {index === 3 &&
                itens[index]
            }

        </div>
      </section>

      <section id="blog" className="w-full" style={styles.blogSection}>
        <h1>Blog</h1>
            <div>
              <label>
                Digite seu nome: 
                <input name='Digite seu nome:' style={styles.formSection}/>
              </label>
              <hr />
              <label>
                Deixe sua mensagem: 
                <input name='Deixe sua mensagem:' style={styles.formSection}/>
              </label>
            </div>
      </section>
    </main>
  );
}

const styles = {
  homePage: {
    backgroundImage: `url(${imagem_home})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "auto 90%"
  },
  textoHome: {
    fontSize: "80px",
    fontFamily: 'Judson',
    color: '#8B5A2B'
  },
  sobreSection: {
    backgroundImage: `url(${imagem_joao})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  },
  blogSection: {
    fontFamily: 'Judson',
    fontSize: '25px',
  },
  formSection: {
    border: 'solid',
    bordercolor: 'black'
  }
}
