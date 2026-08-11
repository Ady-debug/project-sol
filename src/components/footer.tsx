const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center py-20">
        <p className="text-muted font-black">Adrian Soltan, ©{year}</p>
      </div>
    </footer>
  );
}
