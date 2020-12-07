const StackedBar = (w=>{
	const d=w.document,
	frag=d.createDocumentFragment(),
	nestSvgEl=(node,tag,attrs)=>{
		const e=node.appendChild(d.createElementNS('http://www.w3.org/2000/svg',tag));
		if(attrs){
			for(const [a,b] of w.Object.entries(attrs)){
				b && e.setAttribute(a,b)
			}
		};
		return e
	};
	return ({data,width=100,height=12})=>{
		const sum=data.reduce((a,[b])=>a+b,0);
		if(sum){
			const svg=nestSvgEl(frag,'svg',{width,height,viewBox:`0 0 ${width} ${height}`});
			let i=0;
			for(const [value,fill,stroke] of data){
				if(value){
					const n=(value/sum*width);
					nestSvgEl(svg,'rect',{
						x:i.toFixed(2),
						width:n.toFixed(2),
						height,
						fill,
						stroke
					});
					i+=n
				}
			};
			return svg
		}
	}
})(window);
