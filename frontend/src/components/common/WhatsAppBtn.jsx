// export default function WhatsAppBtn() {
//   return (
//     <a href="#" className="fixed bottom-6 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer animate-wb" style={{background:'#25D366',boxShadow:'0 5px 16px rgba(37,211,102,0.38)'}}>
//       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.99 2C6.474 2 2 6.474 2 11.99c0 1.75.48 3.39 1.29 4.81L2 22l5.34-1.37A9.953 9.953 0 0012 22c5.516 0 9.99-4.474 9.99-9.99C21.99 6.474 17.516 2 11.99 2z"/></svg>
//     </a>
//   );
// }




const css = `
  @keyframes wb-pulse {
    0%   { box-shadow: 0 5px 16px rgba(37,211,102,0.38), 0 0 0 0 rgba(37,211,102,0.4); }
    70%  { box-shadow: 0 5px 16px rgba(37,211,102,0.38), 0 0 0 12px rgba(37,211,102,0); }
    100% { box-shadow: 0 5px 16px rgba(37,211,102,0.38), 0 0 0 0 rgba(37,211,102,0); }
  }
  .whatsapp-btn {
    animation: wb-pulse 2s infinite;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .whatsapp-btn:hover {
    box-shadow: 0 8px 24px rgba(37,211,102,0.55) !important;
  }
`;

const PHONE   = '919217489565';
const MESSAGE = 'Hello! I want to know more about your courses.';

export default function WhatsAppBtn() {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <>
      <style>{css}</style>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-btn fixed bottom-6 right-5 z-50 w-[54px] h-[54px] rounded-full flex items-center justify-center cursor-pointer"
        style={{ background: '#25D366' }}
      >
        {/* Official WhatsApp logo SVG */}
        <svg viewBox="0 0 48 48" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z"/>
          <path fill="#25D366" d="M24 7.5c-9.1 0-16.5 7.4-16.5 16.5 0 3.1.9 6 2.4 8.5l.4.7-1.7 6.1 6.3-1.6.7.4c2.4 1.4 5.1 2.1 7.9 2.1 9.1 0 16.5-7.4 16.5-16.5S33.1 7.5 24 7.5z"/>
          <path fill="#fff" fillRule="evenodd" d="M19.2 15.5c-.4-.9-.8-.9-1.2-.9h-1c-.4 0-.9.1-1.4.6s-1.8 1.8-1.8 4.3 1.9 5 2.1 5.3 3.6 5.8 8.9 7.9c4.4 1.8 5.3 1.4 6.3 1.3s3.1-1.3 3.6-2.5.5-2.3.3-2.5c-.1-.2-.5-.3-1-.6s-3.1-1.5-3.6-1.7-.8-.2-1.2.3-1.3 1.7-1.6 2-.6.3-1.1.1-2.2-.8-4.1-2.6c-1.5-1.4-2.5-3-2.8-3.5s0-.8.2-1.1c.2-.2.5-.6.7-.9.2-.3.3-.5.4-.9.1-.4 0-.7-.1-1z"/>
        </svg>
      </a>
    </>
  );
}