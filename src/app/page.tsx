import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Brain, Code, Users, Mail, ChevronRight, Briefcase, UserPlus, Twitter, Facebook, Instagram, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import ResponsiveText from '@/components/ResponsiveText';
import RepeatedBackground from '@/components/RepeatedBackground';
import Navigation from '@/components/Navigation'
import CustomFont from '@/components/FontModule'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ナビゲーションバー */}
      <Navigation />

      {/* ヒーローセクション */}
      <section className="relative min-h-screen pt-20 md:pt-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/background.png"
            alt="背景"
            className="w-full h-full object-contain opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-12 md:py-0 z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 animate-pulse">
              <img
                src="/images/mental20_logo_green.png"
                alt="Mental 2.0 ロゴ"
                className="w-48 h-48 mb-4 animate-logo-glow"
              />
              <CustomFont>
              <span className="word-wrapper whitespace-pre">メンタル2.0</span>
              </CustomFont>
            </div>
            <ResponsiveText>
              <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                <span className="word-wrapper whitespace-pre">メンタル</span>
                <span className="word-wrapper whitespace-pre">ヘルスケアを</span>
                <span className="word-wrapper whitespace-pre">新しい</span>
                <span className="word-wrapper whitespace-pre">バージョンへ</span>
              </h1>
              <span className="text-lg md:text-2xl text-gray-300 max-w-2xl word-wrapper">
                テクノロジーで、
              </span>
              <span className="text-lg md:text-2xl text-gray-300 max-w-2xl word-wrapper">
                あなたの
              </span>
              <span className="text-lg md:text-2xl text-gray-300 max-w-2xl word-wrapper">
                メンタル
              </span>
              <span className="text-lg md:text-2xl text-gray-300 max-w-2xl word-wrapper">
                ヘルスを
              </span>
              <span className="text-lg md:text-2xl text-gray-300 max-w-2xl word-wrapper">
                アップ
              </span>
              <span className="text-lg md:text-2xl text-gray-300 max-w-2xl word-wrapper">
                グレード
              </span>
            </ResponsiveText>
            <ResponsiveText>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full">
                <div className="flex">
                <span className="word-wrapper whitespace-pre">無料相談を</span>
                <span className="word-wrapper whitespace-pre">予約する</span>
                <span className="word-wrapper whitespace-pre"><ChevronRight className="ml-2" /></span>
                </div>
              </Button>
            </ResponsiveText>
          </div>
        </div>
      </section>

      {/* メインコンテンツ全体を包むラッパー */}
      <div className="relative">
        {/* 共通の背景 */}
        <RepeatedBackground imageUrl="/images/background3.png" />

        {/* 理念セクション */}
        <ResponsiveText>
          <section id="about" className="relative py-24 flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="word-wrapper whitespace-pre">メンタル 2.0 </span>
              <span className="word-wrapper whitespace-pre">の理念</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-300">
                    <span className="word-wrapper whitespace-pre">私たちは、</span>
                    <span className="word-wrapper whitespace-pre">最新のテクノロジーと</span>
                    <span className="word-wrapper whitespace-pre">AIを活用し、</span>
                    <span className="word-wrapper whitespace-pre">メンタルヘルスケアの</span>
                    <span className="word-wrapper whitespace-pre">新しい形を</span>
                    <span className="word-wrapper whitespace-pre">創造します。</span>
                    <span className="word-wrapper whitespace-pre">従来の方法に</span>
                    <span className="word-wrapper whitespace-pre">革新をもたらし、</span>
                    <span className="word-wrapper whitespace-pre">より効果的で、</span>
                    <span className="word-wrapper whitespace-pre">より身近な</span>
                    <span className="word-wrapper whitespace-pre">心のケアを</span>
                    <span className="word-wrapper whitespace-pre">実現します。</span>
                  </p>
                  <p className="text-lg text-gray-300">
                    <span className="word-wrapper whitespace-pre">一人ひとりに</span>
                    <span className="word-wrapper whitespace-pre">最適化された</span>
                    <span className="word-wrapper whitespace-pre">ケアプランを提供し、</span>
                    <span className="word-wrapper whitespace-pre">科学的アプローチで</span>
                    <span className="word-wrapper whitespace-pre">心の健康を</span>
                    <span className="word-wrapper whitespace-pre">サポートします。</span>
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="/images/logo2.png"
                    alt="メインビジュアル"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </ResponsiveText>

        {/* サービス紹介セクション */}
        <ResponsiveText>
        {/* <section id="" className="py-20 bg-gradient-to-b from-black to-gray-900"> */}
        <section id="services" className="relative py-24 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="word-wrapper whitespace-pre">技術・サービス紹介</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-gray-800 border-green-500/20 hover:border-green-500/40 transition-colors">
                <Brain className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-green-500">AIメンタル分析</h3>
                <p className="text-gray-300">
                  <span className="word-wrapper whitespace-pre">最新のAI技術を</span>
                  <span className="word-wrapper whitespace-pre">活用して、</span>
                  <span className="word-wrapper whitespace-pre">あなたの心の状態を</span>
                  <span className="word-wrapper whitespace-pre">科学的に分析し、</span>
                  <span className="word-wrapper whitespace-pre">最適なケアプランを</span>
                  <span className="word-wrapper whitespace-pre">提案します。</span>
                </p>
              </Card>
              <Card className="p-6 bg-gray-800 border-green-500/20 hover:border-green-500/40 transition-colors">
                <Code className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-green-500">デジタルセラピー</h3>
                <p className="text-gray-300">
                  <span className="word-wrapper whitespace-pre">オンラインで</span>
                  <span className="word-wrapper whitespace-pre">完結する</span>
                  <span className="word-wrapper whitespace-pre">新世代の</span>
                  <span className="word-wrapper whitespace-pre">メンタルケア。</span>
                  <span className="word-wrapper whitespace-pre">時間や場所を問わず、</span>
                  <span className="word-wrapper whitespace-pre">必要な時に</span>
                  <span className="word-wrapper whitespace-pre">サポートを</span>
                  <span className="word-wrapper whitespace-pre">受けられます。</span>
                </p>
              </Card>
              <Card className="p-6 bg-gray-800 border-green-500/20 hover:border-green-500/40 transition-colors">
                <Users className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-green-500">コミュニティケア</h3>
                <p className="text-gray-300">
                <span className="word-wrapper whitespace-pre">同じ課題を持つ</span>
                <span className="word-wrapper whitespace-pre">仲間とつながり、</span>
                <span className="word-wrapper whitespace-pre">互いにサポートし合える</span>
                <span className="word-wrapper whitespace-pre">環境を提供します。</span>
                </p>
              </Card>
            </div>
          </div>
        </section>
        </ResponsiveText>

        {/* メンバー紹介セクション */}
        <ResponsiveText>
        <section id="members" className="relative py-24 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="word-wrapper whitespace-pre">メンバー紹介</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
            <Card key="Ruu" className="p-6 bg-gray-800 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700">
                  <img
                    src="/images/member_ruu.jpg"
                    alt="メンバー Ruu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <span className="word-wrapper text-green-500">大塚 流羽</span>
                </h3>
                <p className="text-gray-300">
                  <span className="word-wrapper whitespace-pre">メンタル 2.0 </span>
                  <span className="word-wrapper whitespace-pre">代表取締役</span>
                </p>
                <p className="text-sm text-gray-400 mt-4">
                <span className="word-wrapper whitespace-pre">エンジニア歴</span>
                <span className="word-wrapper whitespace-pre">6年。</span><br />
                <span className="word-wrapper whitespace-pre">自らの</span>
                <span className="word-wrapper whitespace-pre">気分障害を</span>
                <span className="word-wrapper whitespace-pre">克服した</span>
                <span className="word-wrapper whitespace-pre">経験を元に、 </span>
                <span className="word-wrapper whitespace-pre">IT 技術で</span>
                <span className="word-wrapper whitespace-pre">セルフケアを</span>
                <span className="word-wrapper whitespace-pre">システム化</span>
                <span className="word-wrapper whitespace-pre">するのが目標。</span>
                <span className="word-wrapper whitespace-pre">セルフケアを、</span>
                <span className="word-wrapper whitespace-pre">誰でも、</span>
                <span className="word-wrapper whitespace-pre">効率的に</span>
                <span className="word-wrapper whitespace-pre">できるように</span>
                <span className="word-wrapper whitespace-pre">することで、</span>
                <span className="word-wrapper whitespace-pre">社会問題の</span>
                <span className="word-wrapper whitespace-pre">解決を目指す。</span>
                </p>
              </Card>
              <Card key="Nishino" className="p-6 bg-gray-800 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700">
                  <img
                    src="/images/member_nishino.png"
                    alt="メンバー Nishino"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <span className="word-wrapper text-green-500">西野 貴騎</span>
                </h3>
                <p className="text-gray-300">
                  <span className="word-wrapper whitespace-pre">研究</span>
                  <span className="word-wrapper whitespace-pre">開発</span>
                  <span className="word-wrapper whitespace-pre">部門 </span>
                  <span className="word-wrapper whitespace-pre">主席</span>
                </p>
                <p className="text-sm text-gray-400 mt-4">
                <span className="word-wrapper whitespace-pre">博士・学術</span>
                <span className="word-wrapper whitespace-pre">（筑波大学院）。</span><br />
                <span className="word-wrapper whitespace-pre">京都大学にて、</span>
                <span className="word-wrapper whitespace-pre">研究者として</span>
                <span className="word-wrapper whitespace-pre">キャリアを積み</span>
                <span className="word-wrapper whitespace-pre">メンタル 2.0 に</span>
                <span className="word-wrapper whitespace-pre">所属するに至る。</span><br />
                <span className="word-wrapper whitespace-pre">現状の医療では</span>
                <span className="word-wrapper whitespace-pre">まだ困難な、</span>
                <span className="word-wrapper whitespace-pre">「個人だけでなく</span>
                <span className="word-wrapper whitespace-pre">コミュニティ」を</span>
                <span className="word-wrapper whitespace-pre">対象としたケアの</span>
                <span className="word-wrapper whitespace-pre">実装を目指す。</span>
                </p>
              </Card>
            </div>
          </div>
        </section>
        </ResponsiveText>

        {/* お仕事依頼セクション */}
        <ResponsiveText>
        <section id="work" className="relative py-24 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <span className="word-wrapper whitespace-pre">お仕事</span>
              <span className="word-wrapper whitespace-pre">依頼</span>
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-300 mb-8">
              <span className="word-wrapper whitespace-pre">メンタル2.0では、</span>
              <span className="word-wrapper whitespace-pre">企業や</span>
              <span className="word-wrapper whitespace-pre">団体からの</span>
              <span className="word-wrapper whitespace-pre">開発・</span>
              <span className="word-wrapper whitespace-pre">DX化・</span>
              <span className="word-wrapper whitespace-pre">SNS運用・</span>
              <span className="word-wrapper whitespace-pre">メンタル</span>
              <span className="word-wrapper whitespace-pre">ヘルスケアに</span>
              <span className="word-wrapper whitespace-pre">関する</span>
              <span className="word-wrapper whitespace-pre">様々な</span>
              <span className="word-wrapper whitespace-pre">お仕事を</span>
              <span className="word-wrapper whitespace-pre">承って</span>
              <span className="word-wrapper whitespace-pre">おります。</span><br />
              <span className="word-wrapper whitespace-pre">AIを活用した</span>
              <span className="word-wrapper whitespace-pre">分析、</span>
              <span className="word-wrapper whitespace-pre">オンラインセラピー、</span>
              <span className="word-wrapper whitespace-pre">ワークショップの</span>
              <span className="word-wrapper whitespace-pre">開催など、</span>
              <span className="word-wrapper whitespace-pre">お客様の</span>
              <span className="word-wrapper whitespace-pre">ニーズに合わせた</span>
              <span className="word-wrapper whitespace-pre">サービスを</span>
              <span className="word-wrapper whitespace-pre">提供いたします。</span>
              
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full">
                <Briefcase className="mr-2" />
                <div className="flex">
                <span className="word-wrapper whitespace-pre">お仕事を</span>
                <span className="word-wrapper whitespace-pre">依頼する</span>
                </div>
              </Button>
            </div>
          </div>
        </section>
        </ResponsiveText>

        {/* 仲間募集セクション */}
        <ResponsiveText>
        <section id="recruit" className="relative py-24 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="word-wrapper whitespace-pre">仲間</span>
            <span className="word-wrapper whitespace-pre">募集</span>
            
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-300 mb-8">
              <span className="word-wrapper whitespace-pre">メンタル2.0では、</span>
              <span className="word-wrapper whitespace-pre">革新的な</span>
              <span className="word-wrapper whitespace-pre">メンタルヘルスケアを</span>
              <span className="word-wrapper whitespace-pre">共に</span>
              <span className="word-wrapper whitespace-pre">創造</span>
              <span className="word-wrapper whitespace-pre">していく</span>
              <span className="word-wrapper whitespace-pre">仲間を</span>
              <span className="word-wrapper whitespace-pre">募集</span>
              <span className="word-wrapper whitespace-pre">しています。</span>
              <span className="word-wrapper whitespace-pre">AI</span>
              <span className="word-wrapper whitespace-pre">開発者、</span>
              <span className="word-wrapper whitespace-pre">心理</span>
              <span className="word-wrapper whitespace-pre">カウンセラー、</span>
              <span className="word-wrapper whitespace-pre">UXデザイナーなど、</span>
              <span className="word-wrapper whitespace-pre">様々な</span>
              <span className="word-wrapper whitespace-pre">専門性を</span>
              <span className="word-wrapper whitespace-pre">持つ</span>
              <span className="word-wrapper whitespace-pre">方々の</span>
              <span className="word-wrapper whitespace-pre">ご応募を</span>
              <span className="word-wrapper whitespace-pre">お待ちして</span>
              <span className="word-wrapper whitespace-pre">おります。</span>
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full">
                <UserPlus className="mr-2" />
                <div className="flex">
                <span className="word-wrapper whitespace-pre">採用</span>
                <span className="word-wrapper whitespace-pre">情報を</span>
                <span className="word-wrapper whitespace-pre">見る</span>
                </div>
              </Button>
            </div>
          </div>
        </section>
        </ResponsiveText>

        {/* お問い合わせフォーム */}
        <ResponsiveText>
        <section id="contact" className="relative py-24 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 max-w-2xl z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="word-wrapper whitespace-pre">お問い</span>
            <span className="word-wrapper whitespace-pre">合わせ</span>
            </h2>
            <form
              action="mailto:info@mental20.com"
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                <span className="word-wrapper whitespace-pre">お名前</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                <span className="word-wrapper whitespace-pre">メール</span>
                <span className="word-wrapper whitespace-pre">アドレス</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                <span className="word-wrapper whitespace-pre">メッセージ</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="bg-gray-800 border-gray-700 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <Mail className="mr-2 h-4 w-4" />
                <div className="flex">
                <span className="word-wrapper whitespace-pre">送信</span>
                <span className="word-wrapper whitespace-pre">する</span>
                </div>
              </Button>
            </form>
          </div>
        </section>
        </ResponsiveText>

        {/* 公式SNSセクション */}
        <section className="relative py-24 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="word-wrapper whitespace-pre">公式</span>
            <span className="word-wrapper whitespace-pre">SNS</span>
            
            </h2>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
                <MessageCircle className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* フッター */}
      <ResponsiveText>
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            <span className="word-wrapper whitespace-pre">&copy; {new Date().getFullYear()} </span>
            <span className="word-wrapper whitespace-pre">Mental </span>
            <span className="word-wrapper whitespace-pre">2.0 </span>
            <span className="word-wrapper whitespace-pre">All </span>
            <span className="word-wrapper whitespace-pre">rights reserved.</span>
            <span className="word-wrapper whitespace-pre">reserved.</span>
          </p>
        </div>
      </footer>
      </ResponsiveText>
    </main>
  )
}
