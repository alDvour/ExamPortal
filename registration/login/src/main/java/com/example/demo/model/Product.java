package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
		private long productId;
	    
	    @Column(name="productName")
		private String productName;
	    
	    @Column(name="productQty")
		private int productQty;
	    
	    public Product() {
			// TODO Auto-generated constructor stub
		}

		public Product(String productName, int productQty) {
			super();
			this.productName = productName;
			this.productQty = productQty;
		}

		public long getProductId() {
			return productId;
		}

		public void setProductId(long productId) {
			this.productId = productId;
		}

		public String getProductName() {
			return productName;
		}

		public void setProductName(String productName) {
			this.productName = productName;
		}

		public int getProductQty() {
			return productQty;
		}

		public void setProductQty(int productQty) {
			this.productQty = productQty;
		}

		@Override
		public String toString() {
			return "Product [productId=" + productId + ", productName=" + productName + ", productQty=" + productQty
					+ "]";
		}
	    
	    
}
