import classes from "./VotingModal.module.css";
import ReactDOM from "react-dom";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { ethers } from "ethers";
import NewsApp from "../abis/NewsApp.json";
import config from "../config.json";
import { useState, useEffect } from "react";

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

const VotingModal = (props) => {
  const [newsApp, setNewsApp] = useState(null);
  const [provider, setProvider] = useState(null);
  const [voteSuccess, setVoteSuccess] = useState(false);
  const Backdrop = () => {
    return (
      <div onClick={props.onModalClick} className={classes.backdrop}></div>
    );
  };

  const init = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const network = await provider.getNetwork();

    const newsApp = new ethers.Contract(
      config[network.chainId].newsApp.address,
      NewsApp,
      provider
    );
    setProvider(provider);
    setNewsApp(newsApp);
  };

  useEffect(() => {
    init();
  }, []);

  const likeHandler = async () => {
    const articleId = props.articleId;
    console.log("Article id:", articleId);

    const signer = await provider.getSigner();

    const vote = await newsApp
      .connect(signer)
      .vote(articleId, true, { value: tokens(0.001) });

    vote.wait();
    setVoteSuccess(true);
  };

  const dislikeHandler = async () => {
    const articleId = props.articleId;
    console.log("Article id:", articleId);

    const signer = await provider.getSigner();

    const vote = await newsApp
      .connect(signer)
      .vote(articleId, false, { value: tokens(0.001) });

    vote.wait();
    setVoteSuccess(true);
  };
  const Modal = () => {
    return (
      <div className={classes.modal}>
        <button className={classes.like_button} onClick={likeHandler}>
          <AiFillLike />
          <br />
          like
          <br />
          {props.likes}
        </button>
        <button className={classes.dislike_button} onClick={dislikeHandler}>
          <AiFillDislike />
          <br />
          dislike
          <br />
          {props.dislikes}
        </button>
      </div>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-div")
      )}
      {ReactDOM.createPortal(
        <Modal />,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};

export default VotingModal;
