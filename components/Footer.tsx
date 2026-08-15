import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium mb-8">
          Let&apos;s build something <span className="text-teal-500 italic">meaningful</span>
        </h2>
        
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <a
            href="mailto:bca005@pimrindore.in"
            className="flex items-center gap-3 px-8 py-4 bg-teal-500 text-white font-semibold rounded hover:bg-teal-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          <a
            href="https://wa.me/917999863810"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-teal-500 hover:text-teal-500 font-semibold rounded transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Manmohan Tiwari. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://github.com/Trumos-ai" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/manmohan-tiwari-87b2873b4/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
