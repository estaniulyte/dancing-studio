import React from "react"
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  const titles = [
    {
      title: 'Solutions',
      elements: [
        {
          name: "Analytics",
          link: "/"
        },
        {
          name: "Marketing",
          link: "/"
        },
        {
          name: "Commerce",
          link: "/"
        },
        {
          name: "Insights",
          link: "/"
        }
      ]
    },
    {
      title: 'Support',
      elements: [
        {
          name: "Pricing",
          link: "/"
        },
        {
          name: "Documentation",
          link: "/"
        },
        {
          name: "Guides",
          link: "/"
        },
        {
          name: "API Status",
          link: "/"
        }
      ]
    },
    {
      title: 'Company',
      elements: [
        {
          name: "About",
          link: "/"
        },
        {
          name: "Blog",
          link: "/"
        },
        {
          name: "Jobs",
          link: "/"
        },
        {
          name: "Press",
          link: "/"
        },
        {
          name: "Careers",
          link: "/"
        }
      ]
    },
    {
      title: 'Legal',
      elements: [
        {
          name: "Claim",
          link: "/"
        },
        {
          name: "Policy",
          link: "/"
        },
        {
          name: "Terms",
          link: "/"
        }
      ]
    }
  ]
  return (
    <div className="max-w-[1420px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOGO.</h1>
        <p className="py-4">Lorem bla bla bla impsum lorem ipsum lorem bla bla bla ipsum lorem ipsum lorem lore mip.</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        {titles?.map((item) => {
            return (
             <div>
                <h6 className="font-medium text-gray-400">
                  { item.title }
                </h6>
                <ul>
                  {item?.elements.map((item) => {
                    return (
                      <li className="py-2 text-sm">
                        <a className="hover:text-[#00df9a]" href={item.link}>
                          { item.name }
                        </a>
                      </li>
                    );
                  })}
                </ul>
             </div>
            );
          })}
      </div>
    </div>
  )
}

export default Footer