import { Link } from "react-router";
import { Sparkles, ArrowLeft, Send, MessageCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello, I am your Assistant.", isBot: true },
    { id: 2, text: "I want a Computer Science program.", isBot: false },
    { id: 3, text: "Hello, I am your Assistant.", isBot: true },
    { id: 4, text: "Can you recommend programs?", isBot: false },
    { id: 5, text: "Hello, I am your Assistant.", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: "Hello, I am your Assistant.",
      isBot: true,
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="glass-card sticky top-0 z-50 border-b border-glass-border shadow-premium">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-success blur-lg opacity-50" />
                <div className="relative bg-success p-2 rounded-xl shadow-premium">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gradient-primary">Chat with AI</h1>
                <p className="text-xs text-muted-foreground">Ask me anything</p>
              </div>
            </div>

            <Link
              to="/student"
              className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-all border border-transparent"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div>
          {/* Chat Area */}
          <div>
            <div className="glass-card rounded-3xl shadow-premium-lg border-glow overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 200px)' }}>
              {/* Chat Header */}
              <div className="px-8 py-6 border-b border-glass-border">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-success blur-lg opacity-40" />
                    <div className="relative bg-success/10 p-3 rounded-xl">
                      <Sparkles className="w-6 h-6 text-success" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">AI Assistant</h2>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      <p className="text-sm text-muted-foreground">Online</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
                {messages.map((message) => (
                  <div key={message.id}>
                    {message.isBot ? (
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-success blur-md opacity-30" />
                          <div className="relative bg-success/10 p-2.5 rounded-xl">
                            <Sparkles className="w-5 h-5 text-success" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="glass-card rounded-2xl rounded-tl-none p-5 border-glow max-w-xl">
                            <p className="text-foreground leading-relaxed">
                              {message.text}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 ml-2">Just now</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-4 justify-end">
                        <div className="flex-1 flex justify-end">
                          <div>
                            <div className="bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-none p-5 max-w-xl">
                              <p className="text-foreground leading-relaxed">
                                {message.text}
                              </p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 mr-2 text-right">Just now</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="px-8 py-6 border-t border-glass-border">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-5 py-4 rounded-xl bg-primary/5 border border-glass-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-success/30 focus:bg-primary/10 transition-all"
                  />
                  <button
                    onClick={handleSend}
                    className="px-6 py-4 bg-success text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
