export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="posts-layout">{children}</section>;
}
