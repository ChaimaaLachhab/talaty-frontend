import type { Config } from "tailwindcss";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Primary colors
				primary: {
					DEFAULT: '#1a3b47', // Dark teal
					foreground: '#ffffff', // White text on primary
				},
				secondary: {
					DEFAULT: '#87ceeb', // Light blue
					foreground: '#1e293b', // Dark text on secondary
				},
				
				// Background colors
				background: '#f8fafc', // Light gray background
				foreground: '#1e293b', // Primary text (dark gray)
				
				// Card colors
				card: {
					DEFAULT: '#ffffff', // White cards
					foreground: '#1e293b', // Primary text on cards
				},
				
				// Status colors
				success: {
					DEFAULT: '#22c55e', // Success green
					foreground: '#ffffff', // White text on success
				},
				warning: {
					DEFAULT: '#f59e0b', // Warning orange
					foreground: '#ffffff', // White text on warning
				},
				destructive: {
					DEFAULT: '#ef4444', // Error red
					foreground: '#ffffff', // White text on error
				},
				info: {
					DEFAULT: '#3b82f6', // Info blue
					foreground: '#ffffff', // White text on info
				},
				
				// Muted colors
				muted: {
					DEFAULT: '#f1f5f9', // Muted background
					foreground: '#64748b', // Secondary text (medium gray)
				},
				
				// Accent colors
				accent: {
					DEFAULT: '#87ceeb', // Light blue accent
					foreground: '#1a3b47', // Dark teal text on accent
				},
				
				// Popover colors
				popover: {
					DEFAULT: '#ffffff', // White popovers
					foreground: '#1e293b', // Text on popovers
				},
				
				// Border and input colors
				border: '#e2e8f0', // Light border
				input: '#e2e8f0', // Input border
				ring: '#1a3b47', // Focus ring (primary)
				
				// Text color utilities
				'text-light': '#94a3b8', // Light text for placeholders
			},
			borderRadius: {
				lg: '12px',
				md: '10px',
				sm: '8px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.5'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-up': 'slide-up 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;