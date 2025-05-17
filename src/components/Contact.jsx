
export const Contact = () => {
    return (
        <>
            <section class="min-h-screen flex items-center justify-center px-4">
                <div class="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">

                    <h2 class="text-3xl font-bold text-center text-purple-700 mb-6">
                        Get in Touch ✨
                    </h2>

                    <form class="space-y-6">

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <div class="relative">
                                <input type="text" placeholder="Your Name"
                                    class="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none px-3 py-2 pr-10 transition-all" />
                                <span class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <div class="relative">
                                <input type="email" placeholder="you@example.com"
                                    class="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none px-3 py-2 pr-10 transition-all" />
                                <span class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <div class="relative">
                                <input type="tel" placeholder="+91 1234567890"
                                    class="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none px-3 py-2 pr-10 transition-all" />
                                <span class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <i class="fas fa-phone"></i>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <div class="relative">
                                <textarea rows="4" placeholder="Your message here..."
                                    class="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none px-3 py-2 pr-10 resize-none transition-all"></textarea>
                                <span class="absolute right-2 top-4 text-gray-400">
                                    <i class="fas fa-comment-dots"></i>
                                </span>
                            </div>
                        </div>

                        <div class="text-center">
                            <button type="submit" disabled
                                class="inline-flex items-center gap-2 px-6 py-2 bg-purple-700 text-white font-medium rounded-full shadow-md hover:bg-purple-800 focus:ring-2 focus:ring-purple-400 transition duration-300">
                                <i class="fas fa-paper-plane"></i> Not working
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </>)
}
