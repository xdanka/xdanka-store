import "./globals.css";

export const metadata = {
  title: "XDanka Materiais de Construção",
  description:
    "Cerâmicas, porcelanatos, revestimentos e materiais de construção.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
