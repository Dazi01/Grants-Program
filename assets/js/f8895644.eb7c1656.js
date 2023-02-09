"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1334],{52145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));a(30828);const i={},l="Polkadot Smart Chain",o={unversionedId:"applications/psc",id:"applications/psc",title:"Polkadot Smart Chain",description:"- Team Name: OmniBTC",source:"@site/docs/applications/psc.md",sourceDirName:"applications",slug:"/applications/psc",permalink:"/Grants-Program/applications/psc",draft:!1,tags:[],version:"current",frontMatter:{}},s={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Basic functionality",id:"milestone-1--basic-functionality",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:m},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"polkadot-smart-chain"},"Polkadot Smart Chain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," OmniBTC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0xBC9C045476F5A85A920EF8F8745631CEC687a4e8 (USDC - Ethereum network)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Polkadot Smart Chain (PSC) is an Ethereum-compatible smart contract parachain which uses directly Polkadot Native Currency as the native gas fee."),(0,r.kt)("p",null,"Almost all parachains now are custom native currencies.\nFor Polkadot community users holding Polkadot Native Currency, these currencies are redundant.\nWhile maintaining the security of the Polkadot network (Reserve-Based-Transfer),\nPSC have brought an evm parachain that supports rich Dapps to Polkadot Native Currency holders."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transfer Polkadot Native Currency from Polkadot to PSC by DMP\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/OmniBTC/PSC/blob/main/docs/dmp.png",alt:"dmp"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transfer Polkadot Native Currency from PSC to Polkadot by UMP\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/OmniBTC/PSC/blob/main/docs/ump.png",alt:"ump"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/OmniBTC/PSC/tree/main/pallets/assets"},"pallet-assets")),":"),(0,r.kt)("p",{parentName:"li"},"WASM assets can be sent/received by XCMP. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/OmniBTC/PSC/blob/main/contracts/AssetsBridgeErc20.sol"},"AssetsBridgeErc20.sol")),":"),(0,r.kt)("p",{parentName:"li"},"Erc20 tokens can be sent/received by ethereum bridges.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/OmniBTC/PSC/tree/main/pallets/assets-bridge"},"pallet-assets-bridge")),": "),(0,r.kt)("p",{parentName:"li"},"Bind EVM address and Substrate account, bind WASM assets and Erc20 tokens, deposit and withdraw fungible assets between WASM and EVM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy EVM contracts with Polkadot Native Currency by truffle/remix/metamask."))),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(1) PSC uses Polkadot Native Currency as the original gas to directly empower Polkadot Native Currency, allowing Polkadot community users who\nhold Polkadot Native Currency to cross-chain to PSC through XCMP, deploy and call EVM defi contracts on PSC.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(2) Our target audience is most users who hold Polkadot Native Currency, as well as potential parachain teams in the future\n(providing them with technical references)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(3) The parachain community provides various applications, but they use their own native currency as transaction fee,\nand users holding Polkadot Native Currency can only use those applications by selling their Polkadot Native Currency in exchange for their currency.\nPSC directly brings these DEFI applications to Polkadot Native Currency users.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(4) We are the first team to eat crabs. We directly empower Polkadot Native Currency to make the Polkadot community more united.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(5) ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AcalaNetwork/Acala"},"Acala")," only uses evm and does not support ethereum api. PSC, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AstarNetwork/Astar"},"Astar"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam"},"Moonbeam")," are all based on frontier and fully support ethereum api.\nBoth Astar and Moonbeam are committed to being an evm contract platform. Although PSC has the same potential, the early goal is to empower Polkadot Native Currency.\nBefore using the functions of the Acala/Astar/Moonbeam chain, Polkadot Native Currency users must purchase their Native Currencies, and the Native Curreny of PSC is the Polkadot Native Currency transferred from the relay chain, no need to purchase any assets.\n"))),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Name of team leader:")," Tianling"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Names of team members:")," Jianbing Zhao, AAweidai, LiMing Sun")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Jianbing Zhao"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:icodezjb@gmail.com"},"icodezjb@gmail.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://omnibtc.finance/"},"https://omnibtc.finance/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 24 RAFFLES PLACE #17-04 CLIFFORD CENTRE Singapore 048621"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," OMNIBTC PTE. LTD."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UEN:")," 202226651M")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"The team is made up of many experienced professionals in the blockchain industry."),(0,r.kt)("p",null,"Tianling(0xhelloweb3) was a former senior expert of Alibaba. After leaving it, he joined a blockchain company as the core developer for 6 years. He is familiar with the underlying blockchain design and substrate development and also was in charge of the architecture design. Now, he is the team leader of OmniBTC team."),(0,r.kt)("p",null,"Jianbing Zhao(icodezjb) is a Substrate / Rust Engineer with 5 years blockchain experience, He is also the core developer of ChainX. Now he is the principal blockchain expert of OmniBTC team."),(0,r.kt)("p",null,"Wei Dai(AAweidai) is a Substrate / Rust Engineer with 2 years blockchain experience, He is also the core developer of ChainX. Now He is the leader of our DOLA-Protocol which is the core application protocol on PSC."),(0,r.kt)("p",null,"LiMing Sun has rich experience in product design and management. He has built many nice and user-friendly internet application. Now he is the senior product manager of OmniBTC team."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OmniBTC/PSC"},"https://github.com/OmniBTC/PSC"))),(0,r.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/0xhelloweb3"},"https://github.com/0xhelloweb3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/icodezjb"},"https://github.com/icodezjb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AAweidai"},"https://github.com/AAweidai"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("p",null,"We are not on LinkedIn."),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"We have completed the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OmniBTC/PSC/blob/main/zombienet/psc-small-network.toml#L4"},"Testnet demo")," version of PSC.\nThe first version is ready to be launch on polkadot as 2053 parachain."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1.5-2 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 8000 USDC")),(0,r.kt)("h3",{id:"milestone-1--basic-functionality"},"Milestone 1 \u2014 Basic functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1.5-2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 8,000 USDC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how to complete the Native Currency transfer between relaychain and PSC through DMP/UMP, and how to deploy and call the evm contracts on PSC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,r.kt)("strong",{parentName:"td"},"article")," that explains how are ethereum address and substrste account related.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Substrate module: pallet-assets-bridge"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that is a bridge from substrate assets(wasm) into ERC20 tokens(evm).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Polkadot Smart Chain"),(0,r.kt)("td",{parentName:"tr",align:null},"pallet-assets-bridge of PSC will interact in such a way: Bind EVM address and Substrate account, bind WASM assets and Erc20 tokens, deposit and withdraw fungible assets between WASM and EVM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Smart contracts: AssetsBridgeErc20"),(0,r.kt)("td",{parentName:"tr",align:null},"We will deliver a set of evm smart contracts that are Erc20 contracts adapted to pallet-assets-bridge.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PSC will run as a parachain of the Polkadot."),(0,r.kt)("li",{parentName:"ul"},"In phase 1, we first support Polkadot Native Currency's asset cross-chain(through DMP/UMP) and wasm-evm asset bridge."),(0,r.kt)("li",{parentName:"ul"},"In phase 2, receive other parachain native currency through XCMP."),(0,r.kt)("li",{parentName:"ul"},"In phase 3, implement the DOLA protocol, allowing the assets on the PSC to circulate freely to other mainstream chains."),(0,r.kt)("li",{parentName:"ul"},"Finally, our goal is to expand the liquidity of Polkadot ecosystem assets.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),(0,r.kt)("br",{parentName:"p"}),"\n","Web3 Foundation Website."),(0,r.kt)("p",null,"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/OmniBTC/DOLA-Protocol"},"DOLA-Protocol"))))}d.isMDXComponent=!0}}]);