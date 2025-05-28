import phishingExample from "../../json/examples.json";
export default function SocialMediaExample() {
  const example = phishingExample.socialMedia;
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://elcomercio.pe/resizer/v2/4TGRZCVA25DE7ASUJYMSQUB5DI.jpg?auth=0a0cd171f2db6802d352c625f98143d64a6e5ad6efdbf6733d95dab50bb61de7&width=1200&height=810&quality=90&smart=true"
            />
          </div>
        </div>
        <div className="chat-bubble">
          {example.msg1}
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://elcomercio.pe/resizer/v2/4TGRZCVA25DE7ASUJYMSQUB5DI.jpg?auth=0a0cd171f2db6802d352c625f98143d64a6e5ad6efdbf6733d95dab50bb61de7&width=1200&height=810&quality=90&smart=true"
            />
          </div>
        </div>
        <div className="chat-bubble">
          {example.msg2}
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://elcomercio.pe/resizer/v2/4TGRZCVA25DE7ASUJYMSQUB5DI.jpg?auth=0a0cd171f2db6802d352c625f98143d64a6e5ad6efdbf6733d95dab50bb61de7&width=1200&height=810&quality=90&smart=true"
            />
          </div>
        </div>
        <div className="chat-bubble">{example.msg3}</div>
      </div>
    </>
  );
}
